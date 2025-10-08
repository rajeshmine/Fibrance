import React from "react";
import { Link } from "react-router-dom";

const featuredProducts = [
  { id: "1", name: "Elegant Saree", price: "₹1,999", image: "/images/saree1.jpg" },
  { id: "2", name: "Designer Salwar", price: "₹1,499", image: "/images/salwar1.jpg" },
  { id: "3", name: "Cotton Dupatta", price: "₹799", image: "/images/dupatta1.jpg" },
];

const Home = () => {
  return (
    <>
      <section className="hero-section">
        <h2>Welcome to Neidhal</h2>
        <p>Buy Ethnic Wear for Women at Neidhal Online Shopping</p>
      </section>

      <section className="featured-products">
        <h3>Featured Collections</h3>
        <div className="product-grid">
          {featuredProducts.map((product) => (
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
        </div>
      </section>
    </>
  );
};

export default Home;
