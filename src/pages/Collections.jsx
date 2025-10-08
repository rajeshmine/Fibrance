import React, { useState } from "react";
import { Link } from "react-router-dom";

const productData = [
  { id: "1", name: "Elegant Saree", category: "Sarees", price: "₹1,999", image: "/images/saree1.jpg" },
  { id: "2", name: "Designer Salwar", category: "Salwar Material", price: "₹1,499", image: "/images/salwar1.jpg" },
  { id: "3", name: "Cotton Dupatta", category: "Dupattas", price: "₹799", image: "/images/dupatta1.jpg" },
  { id: "4", name: "Chiffon Saree", category: "Sarees", price: "₹2,399", image: "/images/saree2.jpg" },
  { id: "5", name: "Silk Salwar", category: "Salwar Material", price: "₹2,199", image: "/images/salwar2.jpg" },
  { id: "6", name: "Embroidered Dupatta", category: "Dupattas", price: "₹999", image: "/images/dupatta2.jpg" },
];

const categories = ["All", "Sarees", "Salwar Material", "Dupattas"];

const Collections = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? productData
      : productData.filter((product) => product.category === selectedCategory);

  return (
    <>
      <h2>Collections</h2>
      <div className="category-filter">
        {categories.map((cat) => (
          <button
            key={cat}
            className={cat === selectedCategory ? "filter-btn active" : "filter-btn"}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="product-grid">
        {filteredProducts.map((product) => (
          <article key={product.id} className="product-card">
            <img
              src={product.image}
              alt={product.name}
              loading="lazy"
              className="product-image"
            />
            <h4>{product.name}</h4>
            <p className="price">{product.price}</p>
            <Link to={`/collections/${product.id}`} className="btn">
              View Details
            </Link>
          </article>
        ))}
        {filteredProducts.length === 0 && <p>No products found in this category.</p>}
      </div>
    </>
  );
};

export default Collections;
