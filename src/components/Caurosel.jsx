import React, { useState, useEffect } from "react";
import "./Carousel.css";

const images = [
  "https://tse3.mm.bing.net/th/id/OIP.6rxXZ1NOhqx5oeR8Hi570QHaDW?cb=12&pid=ImgDet&w=164&h=74&c=7&dpr=1.5&o=7&rm=3",
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % length);
    }, 3000);
    return () => clearInterval(timer);
  }, [length]);

  return (
    <div className="carousel">
      {images.map((img, index) => (
        <div
          className={`slide ${index === current ? "active" : ""}`}
          key={index}
        >
          {index === current && <img src={img} alt={`Slide ${index}`} />}
        </div>
      ))}

      {/* Overlay Text */}
      <div className="overlay">
        <h1>Newly Launched</h1>
        <button>View All</button>
      </div>
    </div>
  );
};

export default Carousel;