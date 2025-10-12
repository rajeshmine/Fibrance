import React, { useEffect, useState } from "react";
import "./HeroBannerCarousel.css";

const slides = [
  {
    src: "https://images.pexels.com/photos/1162983/pexels-photo-1162983.jpeg",
    heading: "Newly Launched",
    subtext: "Discover our latest saree collection",
    cta: "Shop Now",
    link: "/sarees",
  },
  {
    src: "https://images.pexels.com/photos/1162983/pexels-photo-1162983.jpeg",
    heading: "Golden Elegance",
    subtext: "Tissue silk sarees for festive vibes",
    cta: "View Collection",
    link: "/golden-sarees",
  },
  {
    src: "https://images.pexels.com/photos/1162983/pexels-photo-1162983.jpeg",
    heading: "Timeless Black",
    subtext: "Elegant drapes for every occasion",
    cta: "Explore",
    link: "/black-sarees",
  },
];

export default function HeroBannerCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setIndex((prev) => (prev + 1) % slides.length),
      4000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-banner-carousel">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`hero-slide ${i === index ? "hero-active" : ""}`}
          style={{ backgroundImage: `url(${slide.src})` }}
        >
          <div className="hero-overlay">
            <h2>{slide.heading}</h2>
            <p>{slide.subtext}</p>
            <a href={slide.link} className="hero-cta-btn">
              {slide.cta}
            </a>
          </div>
        </div>
      ))}
    </section>
  );
}