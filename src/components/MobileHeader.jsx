import React, { useState } from "react";
import "./MobileHeader.css";

// You can pass these from props if desired for navigation
const menuLinks = [
  { label: "New Arrival", href: "#" },
  { label: "Salwar materials", href: "#" },
  { label: "Sarees", href: "#" },
  { label: "Bestseller", href: "#" },
  { label: "Rare & Unique", href: "#" },
  { label: "Shop By Video", href: "#" },
  { label: "Price Drop", href: "#" },
  { label: "Sold Out", href: "#" }
];
const tabBarLinks = [
  { label: "HOME", icon: "⌂", href: "#", active: true },
  { label: "SALWAR", icon: "👗", href: "#" },
  { label: "SAREES", icon: "🥻", href: "#" },
  { label: "CONTACT", icon: "☎", href: "#" }
];

function MobileHeader({ cartCount = 1, wishlistCount = 0 }) {
  const [menuOpen, setMenuOpen] = useState(false);

  // Trap focus in sidebar when open for accessibility
  React.useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  // Allow ESC to close sidebar
  React.useEffect(() => {
    const handleKeyDown = e => {
      if (menuOpen && e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  return (
    <>
      <div className="mobile-header-bar">
        <button
          className="header-icon"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen(o => !o)}
        >
          {menuOpen ? (
            <span className="icon-close">&#10005;</span>
          ) : (
            <span className="icon-hamburger">&#9776;</span>
          )}
        </button>
        <button className="header-icon" aria-label="Search">
          <span role="img" aria-label="Search">🔍</span>
        </button>
        <div className="mobile-logo">FIBRANCE<sup>®</sup></div>
        <button className="header-icon" aria-label="Wishlist">
          <span role="img" aria-label="Wishlist">♡</span>
          {wishlistCount > 0 && <span className="cart-badge">{wishlistCount}</span>}
        </button>
        <button className="header-icon" aria-label="Cart">
          <span role="img" aria-label="Cart">👜</span>
          {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
        </button>
      </div>

      <div
        className={`mobile-sidebar-bg${menuOpen ? ' active' : ''}`}
        tabIndex={-1}
        aria-hidden={!menuOpen}
        onClick={() => setMenuOpen(false)}
      />
      <aside
        className={`mobile-sidebar${menuOpen ? ' open' : ''}`}
        aria-hidden={!menuOpen}
        tabIndex={menuOpen ? 0 : -1}
      >
        <nav className="mobile-menu-list" aria-label="Main menu">
          {menuLinks.map(link => (
            <a key={link.label} href={link.href} className="mobile-menu-link">
              {link.label}
              {link.hasArrow && <span className="arrow">&#8594;</span>}
            </a>
          ))}
        </nav>
        <div className="mobile-tab-bar">
          {tabBarLinks.map(tab => (
            <a
              key={tab.label}
              href={tab.href}
              className={`tab-link${tab.active ? " active" : ""}`}
            >
              <span className="tab-icon">{tab.icon}</span>
              <span>{tab.label}</span>
            </a>
          ))}
        </div>
      </aside>
    </>
  );
}

export default MobileHeader;
