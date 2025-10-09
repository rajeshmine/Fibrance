// App.js
import React from "react";

// Static Data Simulating https://www.hayclothing.in/
const siteData = {
  header: {
    logo: "HAY!",
    menu: [
      { name: "Home", link: "/" },
      { name: "Dresses", link: "/dresses" },
      { name: "Kurtas", link: "/kurtas" },
      { name: "Co-ords", link: "/co-ords" },
      { name: "Casual Wear", link: "/casual-wear" },
      { name: "Offers", link: "/offers" },
      { name: "Contact Us", link: "/contact" },
    ],
    promoText: "Buy 2 or more kurta and get for Rs 799 each | Grab 20% off on Leggings when you pair it up with Kurti or Dresses",
  },
  homeBanner: {
    image:
      "https://cdn.shopify.com/s/files/1/0556/6768/8512/files/Summer_Collection_2025_2_2048x.jpg?v=1691573000",
    alt: "Hay Clothing Banner",
    text: "Step into the season with fresh styles & everyday comfort",
  },
  offers: [
    {
      title: "Buy 2 or More Kurtas",
      description: "Get each for Rs 799",
    },
    {
      title: "Leggings Offer",
      description: "Grab 20% off on leggings with kurti or dresses",
    },
  ],
  categories: [
    { id: "dresses", name: "Dresses" },
    { id: "kurtas", name: "Kurtas" },
    { id: "co-ords", name: "Co-ords" },
    { id: "casual-wear", name: "Casual Wear" },
  ],
  products: {
    dresses: [
      {
        id: 1,
        name: "Violet Haze Viscose Dress",
        price: 1499,
        image:
          "https://cdn.shopify.com/s/files/1/0556/6768/8512/products/violet-haze-viscose-dress.jpg",
        description: "Sweetheart Neck with Embroidery",
      },
      {
        id: 2,
        name: "Lush Layers Beige Viscose Dress",
        price: 1599,
        image:
          "https://cdn.shopify.com/s/files/1/0556/6768/8512/products/lush-layers-beige-viscose-dress.jpg",
        description: "Tropical Palm Print",
      },
      {
        id: 3,
        name: "Ocean Polka Blue Handloom Cotton Dress",
        price: 1899,
        image:
          "https://cdn.shopify.com/s/files/1/0556/6768/8512/products/ocean-polka-blue-handloom-cotton.jpg",
        description: "V Neckline with Detached 3/4th Sleeves",
      },
    ],
    kurtas: [
      {
        id: 4,
        name: "Dusk Beige with Rustleaf Grace Floral Linen Kurta",
        price: 1049,
        image:
          "https://cdn.shopify.com/s/files/1/0556/6768/8512/products/dusk-beige-rustleaf-linen-kurta.jpg",
        description: "Floral Printed Linen Blend",
      },
      {
        id: 5,
        name: "Plaid Muse Black Viscose Kurta",
        price: 999,
        image:
          "https://cdn.shopify.com/s/files/1/0556/6768/8512/products/plaid-muse-black-viscose-kurta.jpg",
        description: "Embroidery and Print",
      },
    ],
    "co-ords": [
      {
        id: 6,
        name: "Olive Majesty Viscose Co-ord",
        price: 1599,
        image:
          "https://cdn.shopify.com/s/files/1/0556/6768/8512/products/olive-majesty-coord.jpg",
        description: "Chinese Collar & Half Jacket",
      },
      {
        id: 7,
        name: "Rosetta Bloom Brown Handloom Co-ord",
        price: 2499,
        image:
          "https://cdn.shopify.com/s/files/1/0556/6768/8512/products/rosetta-bloom-brown-handloom-coord.jpg",
        description: "Close Neck & Detachable Sleeves",
      },
    ],
    "casual-wear": [
      {
        id: 8,
        name: "Casual Blue Bloom Viscose Dress",
        price: 1799,
        image:
          "https://cdn.shopify.com/s/files/1/0556/6768/8512/products/blue-bloom-viscose-dress.jpg",
        description: "Shoulder Elastic Dress",
      },
      {
        id: 9,
        name: "Soft Blue Whirlwind Romance Silk Kurta",
        price: 1399,
        image:
          "https://cdn.shopify.com/s/files/1/0556/6768/8512/products/soft-blue-whirlwind-silk-kurta.jpg",
        description: "Silk Slub Kurta",
      },
    ],
  },
  contact: {
    phone: "9944842672",
    email: "care@hayclothing.in",
    address: "147 Park Road, Erode-638003, Tamil Nadu",
    hours: "Monday to Saturday from 10AM-6PM",
  },
  footerText: "© 2025 HAY Clothing. All rights reserved.",
};

// Helper Components
const Header = ({ logo, menu, promoText, onNavClick, currentPage }) => (
  <header style={styles.header}>
    <div style={styles.logo}>{logo}</div>
    <nav style={styles.nav}>
      {menu.map((item) => (
        <a
          key={item.name}
          href="#!"
          onClick={() => onNavClick(item.link)}
          style={{
            ...styles.navLink,
            fontWeight:
              currentPage ===
              (item.link === "/" ? "home" : item.link.replace("/", ""))
                ? "700"
                : "400",
          }}
        >
          {item.name}
        </a>
      ))}
    </nav>
    <div style={styles.promo}>{promoText}</div>
  </header>
);

const Banner = ({ image, alt, text }) => (
  <div style={styles.banner}>
    <img src={image} alt={alt} style={styles.bannerImage} />
    <div style={styles.bannerText}>{text}</div>
  </div>
);

const Offers = ({ offers }) => (
  <div style={styles.offersContainer}>
    {offers.map((offer, index) => (
      <div key={index} style={styles.offer}>
        <h3>{offer.title}</h3>
        <p>{offer.description}</p>
      </div>
    ))}
  </div>
);

const ProductCard = ({ product }) => (
  <div style={styles.productCard}>
    <img
      src={product.image}
      alt={product.name}
      style={styles.productImage}
      loading="lazy"
      onError={(e) => (e.target.style.display = "none")}
    />
    <h4 style={styles.productName}>{product.name}</h4>
    <p style={styles.productDesc}>{product.description}</p>
    <p style={styles.productPrice}>Rs. {product.price}</p>
    <button style={styles.buyBtn}>Buy Now</button>
  </div>
);

const ProductList = ({ products }) => (
  <div style={styles.productList}>
    {products.map((prod) => (
      <ProductCard key={prod.id} product={prod} />
    ))}
  </div>
);

const Contact = ({ contact }) => (
  <div style={styles.contact}>
    <h3>Contact Us</h3>
    <p>Phone: {contact.phone}</p>
    <p>Email: {contact.email}</p>
    <p>Address: {contact.address}</p>
    <p>Hours: {contact.hours}</p>
  </div>
);

const Footer = ({ text }) => (
  <footer style={styles.footer}>{text}</footer>
);

export default function App() {
  const [page, setPage] = React.useState("home");

  const handleNavClick = (link) => {
    if (link === "/") setPage("home");
    else setPage(link.replace("/", ""));
  };

  const renderContent = () => {
    switch (page) {
      case "home":
        return (
          <>
            <Banner
              image={siteData.homeBanner.image}
              alt={siteData.homeBanner.alt}
              text={siteData.homeBanner.text}
            />
            <Offers offers={siteData.offers} />
          </>
        );
      case "dresses":
      case "kurtas":
      case "co-ords":
      case "casual-wear":
        return <ProductList products={siteData.products[page]} />;
      case "offers":
        return <Offers offers={siteData.offers} />;
      case "contact":
        return <Contact contact={siteData.contact} />;
      default:
        return <p>Page not found</p>;
    }
  };

  return (
    <div style={styles.app}>
      <Header
        logo={siteData.header.logo}
        menu={siteData.header.menu}
        promoText={siteData.header.promoText}
        onNavClick={handleNavClick}
        currentPage={page}
      />
      <main style={styles.mainContent}>{renderContent()}</main>
      <Footer text={siteData.footerText} />
    </div>
  );
}

const styles = {
  app: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    maxWidth: 1080,
    margin: "auto",
    padding: 16,
    color: "#212529",
  },
  header: {
    borderBottom: "2px solid #ccc",
    paddingBottom: 12,
    marginBottom: 16,
  },
  logo: {
    fontWeight: "bold",
    fontSize: 28,
    color: "#0077b6",
    cursor: "pointer",
  },
  nav: {
    marginTop: 8,
    display: "flex",
    gap: 12,
    flexWrap: "wrap",
  },
  navLink: {
    textDecoration: "none",
    color: "#023e8a",
    cursor: "pointer",
  },
  promo: {
    marginTop: 8,
    fontStyle: "italic",
    color: "#0077b6",
  },
  banner: {
    position: "relative",
    marginBottom: 24,
    borderRadius: 12,
    overflow: "hidden",
  },
  bannerImage: {
    width: "100%",
    borderRadius: 12,
  },
  bannerText: {
    position: "absolute",
    bottom: 16,
    left: 16,
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    textShadow: "1px 1px 4px rgba(0,0,0,0.7)",
  },
  offersContainer: {
    display: "flex",
    gap: 24,
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: 24,
  },
  offer: {
    border: "1px solid #ddd",
    padding: 16,
    borderRadius: 12,
    width: 240,
    textAlign: "center",
    backgroundColor: "#caf0f8",
  },
  productList: {
    display: "flex",
    flexWrap: "wrap",
    gap: 24,
    justifyContent: "center",
  },
  productCard: {
    width: 240,
    border: "1px solid #ddd",
    borderRadius: 12,
    textAlign: "center",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    padding: 12,
    backgroundColor: "#f0faff",
  },
  productImage: {
    width: "100%",
    borderRadius: 12,
    marginBottom: 8,
  },
  productName: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 4,
  },
  productDesc: {
    fontSize: 14,
    color: "#555",
    marginBottom: 8,
  },
  productPrice: {
    fontWeight: "bold",
    color: "#0077b6",
    marginBottom: 8,
  },
  buyBtn: {
    padding: "8px 16px",
    fontWeight: "bold",
    borderRadius: 8,
    border: "none",
    backgroundColor: "#0077b6",
    color: "white",
    cursor: "pointer",
  },
  contact: {
    textAlign: "center",
    fontSize: 16,
  },
  footer: {
    borderTop: "2px solid #ccc",
    marginTop: 24,
    paddingTop: 12,
    color: "#555",
    fontSize: 14,
    textAlign: "center",
  },
  mainContent: {
    minHeight: 400,
    marginBottom: 32,
  },
};
