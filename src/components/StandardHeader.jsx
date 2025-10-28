import React, { useState } from "react";
import "./StandardHeader.css";
import SalwarDropdown from "./SalwarDropdown";
const salwarDropdown = [
    {
        title: "By Fabric",
        links: [
            { label: "Cotton", url: "https://neidhal.com/collections/cotton-salwar-materials" },
            { label: "Silk Cotton", url: "https://neidhal.com/collections/cotton-silk-dress-material" },
            { label: "Silk", url: "https://neidhal.com/collections/silk-dress-material" },
            { label: "Organza", url: "https://neidhal.com/collections/organza-dress-material" },
            { label: "Linen", url: "https://neidhal.com/collections/linen-dress-material" },
            { label: "Georgette", url: "https://neidhal.com/collections/georgette-dress-material" },
            { label: "Kota", url: "https://neidhal.com/collections/kota-dress-material" },
            { label: "Others", url: "https://neidhal.com/collections/dress-fabric-material" }
        ]
    },
    {
        title: "By Occasion",
        links: [
            { label: "Daily Wear", url: "https://neidhal.com/collections/daily-wear-dress-materials" },
            { label: "Office Wear", url: "https://neidhal.com/collections/office-wear-salwar" },
            { label: "Festive wear", url: "https://neidhal.com/collections/festival-salwar-suit" },
            { label: "Party Wear", url: "https://neidhal.com/collections/party-wear-dress-material-for-ladies" }
        ]
    },
    {
        title: "By Color",
        links: [
            { label: "Red", url: "https://neidhal.com/collections/red-colour-dress-material" },
            { label: "Blue", url: "https://neidhal.com/collections/blue-colour-dress-material" },
            { label: "Green", url: "https://neidhal.com/collections/green-colour-dress-material" },
            { label: "Black", url: "https://neidhal.com/collections/black-colour-dress-material" },
            { label: "White", url: "https://neidhal.com/collections/white-colour-dress-material" },
            { label: "Purple", url: "https://neidhal.com/collections/purple-color-dress-material" },
            { label: "Orange", url: "https://neidhal.com/collections/orange-colour-dress-material" },
            { label: "Brown", url: "https://neidhal.com/collections/brown-colour-dress-material" },
            { label: "Beige", url: "https://neidhal.com/collections/beige-color-dress-material" },
            { label: "Maroon", url: "https://neidhal.com/collections/maroon-colour-dress-materials" },
            { label: "Pink", url: "https://neidhal.com/collections/pink-colour-dress-material" },
            { label: "Peach", url: "https://neidhal.com/collections/peach-color-dress-material" },
            { label: "Yellow", url: "https://neidhal.com/collections/yellow-colour-dress-material" },
            { label: "Grey", url: "https://neidhal.com/collections/grey-colour-dress-material" }
        ]
    },
    {
        title: "By Price",
        links: [
            { label: "Less than 1000", url: "https://neidhal.com/collections/dress-materials-below-1000" },
            { label: "1000-2000", url: "https://neidhal.com/collections/dress-material-above-1000-to-2000" },
            { label: "2000 and above", url: "https://neidhal.com/collections/dress-materials-above-2000" }
        ]
    }
];
function StandardHeader({ cartCount = 1 }) {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <header className="standard-header">
            <div className="header-row-top">
                <div className="header-social-row">
                    <a href="https://facebook.com" aria-label="Facebook" className="icon-social">
                        {/* Facebook SVG */}
                        <svg width="22" height="22" fill="none" viewBox="0 0 22 22"><path fill="#444" d="M12.6 21.365V11.235h3.369l.505-3.3h-3.874V6.083c0-.955.265-1.605 1.636-1.605H16.6V1.454c-.286-.038-1.27-.124-2.416-.124-2.391 0-4.029 1.455-4.029 4.128v2.47H6v3.3h4.155v10.137h2.445Z" /></svg>
                    </a>
                    <a href="https://instagram.com" aria-label="Instagram" className="icon-social">
                        {/* Instagram SVG */}
                        <svg width="22" height="22" fill="none" viewBox="0 0 22 22"><rect x="3" y="3" width="16" height="16" rx="5" stroke="#444" strokeWidth="2" /><circle cx="11" cy="11" r="4" stroke="#444" strokeWidth="2" /><circle cx="16.5" cy="5.5" r="1" fill="#444" /></svg>
                    </a>
                    <a href="https://youtube.com" aria-label="YouTube" className="icon-social">
                        {/* YouTube SVG */}
                        <svg width="23" height="23" fill="none" viewBox="0 0 23 23"><rect width="22" height="22" fill="none" /><path d="M19.5 6.909c-.24-.904-.948-1.604-1.841-1.845C15.791 4.727 11.5 4.727 11.5 4.727s-4.291 0-6.159.337C4.448 5.305 3.74 6.005 3.5 6.909c-.33 1.244-.33 3.846-.33 3.846s0 2.602.33 3.846c.24.904.948 1.604 1.841 1.845 1.868.337 6.159.337 6.159.337s4.291 0 6.159-.337c.893-.241 1.601-.941 1.841-1.845.33-1.244.33-3.846.33-3.846s0-2.602-.33-3.846ZM9.727 13.614V7.977l5.182 2.819-5.182 2.818Z" fill="#444" /></svg>
                    </a>
                    <a href="#" aria-label="X / Twitter" className="icon-social">
                        {/* Twitter/X SVG */}
                        <svg width="22" height="22" fill="none" viewBox="0 0 22 22"><path d="M4.82 2.75h3.029l4.411 6.568L16.77 2.75h3.029l-5.777 8.558L20.08 19.25h-3.035l-4.7-6.986-4.038 6.986H5.583l6.015-10.057L4.82 2.75Zm3.29 1.073h-1.48l8.125 13.354h1.489L8.11 3.823Z" fill="#444" /></svg>
                    </a>
                </div>
                <div className="header-center-logo">
                    <a href="/">FIBRANCE<sup>®</sup></a>
                </div>
                <div className="header-actions-row">
                    <button className="header-icon" aria-label="Search">
                        <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="11" cy="11" r="7" stroke="#444" strokeWidth="2" /><path d="M20 20l-3.5-3.5" stroke="#444" strokeWidth="2" strokeLinecap="round" /></svg>
                    </button>
                    <button className="header-icon" aria-label="Profile">
                        <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4" stroke="#444" strokeWidth="2" /><path d="M21 21c0-3.866-3.582-7-8-7s-8 3.134-8 7" stroke="#444" strokeWidth="2" /></svg>
                    </button>
                    <button className="header-icon" aria-label="Wishlist">
                        <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M17.991 4.611a4.307 4.307 0 0 1 3.167 7.097c-2.82 3.533-7.152 7.086-7.152 7.086s-4.352-3.573-7.18-7.106a4.307 4.307 0 0 1 3.174-7.077c1.284-.147 2.53.323 3.341 1.213.81-.89 2.057-1.36 3.35-1.213Z" stroke="#444" strokeWidth="2" fill="none" /></svg>
                    </button>
                    <button className="header-icon" aria-label="Cart" style={{ position: "relative" }}>
                        <svg width="23" height="23" fill="none" viewBox="0 0 23 23"><circle cx="11.5" cy="11.5" r="10.5" stroke="#444" strokeWidth="2" /><path d="M7 7l9 0.01-1 7.992H8L7 7Z" stroke="#444" strokeWidth="2" /></svg>
                        {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
                    </button>
                </div>
            </div>
            <nav className="header-categories-row">
                <a href="/shop">New Arrival</a>
                <a href="/shop">Salwar materials</a>
                {/* <div
                    className="dropdown-parent"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                >
                    <a
                        href="https://neidhal.com/collections/salwar-materials"
                        className="dropdown-link"
                        aria-haspopup="true"
                        aria-expanded={dropdownOpen}
                    >
                        Salwar materials <span className="arrow">&#709;</span>
                    </a>
                    {dropdownOpen && (
                        <div className="dropdown-content">
                            <SalwarDropdown />
                        </div>
                    )}
                </div> */}

                <a href="/shop">Sarees</a>
                <a href="/shop">Bestseller</a>
                <a href="/shop">Rare & Unique</a>
                <a href="/shop">Shop By Video</a>
                <a href="/shop">Price Drop</a>
                <a href="/shop">Sold Out</a>
            </nav>
        </header>
    );
}

export default StandardHeader;
