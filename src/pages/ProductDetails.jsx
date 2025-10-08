import React from "react";
import { useParams, Link } from "react-router-dom";

const productData = [
  { id: "1", name: "Elegant Saree", category: "Sarees", price: "₹1,999", image: "/images/saree1.jpg", description: "Beautiful chiffon saree with intricate embroidery." },
  { id: "2", name: "Designer Salwar", category: "Salwar Material", price: "₹1,499", image: "/images/salwar1.jpg", description: "Silk designer salwar suit set perfect for festive wear." },
  { id: "3", name: "Cotton Dupatta", category: "Dupattas", price: "₹799", image: "/images/dupatta1.jpg", description: "Soft cotton dupatta with traditional prints." },
  { id: "4", name: "Chiffon Saree", category: "Sarees", price: "₹2,399", image: "/images/saree2.jpg", description: "Lightweight chiffon saree with floral patterns." },
  { id: "5", name: "Silk Salwar", category: "Salwar Material", price: "₹2,199", image: "/images/salwar2.jpg", description: "Elegant silk salwar-designed with golden embellishments." },
  { id: "6", name: "Embroidered Dupatta", category: "Dupattas", price: "₹999", image: "/images/dupatta2.jpg", description: "Dupatta with heavy embroidery and mirror work." },
];

const ProductDetails = () => {
  const { productId } = useParams();

  const product = productData.find((p) => p.id === productId);

  if (!product) {
    return (
      <div>
        <h2>Product Not Found</h2>
        <Link to="/collections" className="btn">
          Back to Collections
        </Link>
      </div>
    );
  }

  return (
    <div className="product-details">
      <img
        src={product.image}
        alt={product.name}
        className="product-details-image"
        loading="lazy"
      />
      <div className="product-details-info">
        <h2>{product.name}</h2>
        <p className="price">{product.price}</p>
        <p className="description">{product.description}</p>
        <button className="btn">Add to Cart</button>
      </div>
      <Link to="/collections" className="back-link">
        &larr; Back to Collections
      </Link>
    </div>
  );
};

export default ProductDetails;
