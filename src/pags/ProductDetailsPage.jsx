import React from "react";
import "./ProductDetailsPage.css"; // Import the CSS

const product = {
  title: "Pastel Blue Salwar Dress Material",
  image: "https://images.pexels.com/photos/34222609/pexels-photo-34222609.jpeg", // Replace with your image URL
  price: 1899,
  sku: "OC251301",
  isSoldOut: true,
  description: "Premium pastel blue salwar material with beautiful printed and embroidered motifs.",
};

function ProductDetailsPage() {
  return (
    <div className="pdp-container">
      <nav className="pdp-breadcrumb">
        Home &gt; Salwar Dress Materials for women
      </nav>
      <div className="pdp-main">
        <div className="pdp-img-block">
          <img src={product.image} alt={product.title} className="pdp-image" />
          {product.isSoldOut && (
            <span className="pdp-soldout">SOLD OUT</span>
          )}
        </div>
        <div className="pdp-info">
          <h1 className="pdp-title">{product.title}</h1>
          <div className="pdp-sku">
            SKU: <span>{product.sku}</span>
          </div>
          <h2 className="pdp-price">₹ {product.price}.00</h2>
          <div className="pdp-desc">{product.description}</div>
          <button
            className="pdp-cart-btn"
            disabled={product.isSoldOut}
          >
            {product.isSoldOut ? "Sold Out" : "Add to Cart"}
          </button>
        </div>
        <aside className="pdp-sidebar">
          <section>
            <div className="pdp-side-title">Collections</div>
            <ul>
              <li>FAQ</li>
              <li>About Us</li>
            </ul>
          </section>
          <section>
            <div className="pdp-side-title">Availability</div>
            <ul>
              <li>In stock</li>
              <li>Out of stock</li>
            </ul>
          </section>
          <section>
            <div className="pdp-side-title">Occasions</div>
            <ul>
              <li>Daily Wear</li>
            </ul>
          </section>
        </aside>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
