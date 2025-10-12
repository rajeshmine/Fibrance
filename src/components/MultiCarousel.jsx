import React, { useEffect, useRef } from "react";
import "./MultiCarousel.css";

const images = [
  {
    src: "https://cdn.pixabay.com/photo/2015/07/15/16/52/salwar-kameez-846702_1280.jpg",
    name: "Periwinkle Embellished Net Saree with heavy embroidery and matching blouse piece",
    shortName: "Periwinkle Saree",
    price: "₹ 2,199.00",
  },
  {
    src: "https://cdn.pixabay.com/photo/2022/08/23/09/17/wedding-7405415_1280.jpg",
    name: "Golden Tissue Silk Saree with zari woven pallu and festive border",
    shortName: "Golden Tissue Saree",
    price: "₹ 3,499.00",
  },
  {
    src: "https://cdn.pixabay.com/photo/2025/10/06/09/01/srishti-textile-9876599_1280.jpg",
    name: "Blue Silk Saree with contrast blouse and elegant zari motifs",
    shortName: "Blue Silk Saree",
    price: "₹ 2,899.00",
  },
  {
    src: "https://images.pexels.com/photos/1162983/pexels-photo-1162983.jpeg",
    name: "Floral Border Satin Silk Saree with pastel tones and lightweight drape",
    shortName: "Floral Satin Saree",
    price: "₹ 1,999.00",
  },
  {
    src: "https://cdn.pixabay.com/photo/2022/08/23/09/17/wedding-7405415_1280.jpg",
    name: "Sequins Party Wear Saree with shimmering embellishments",
    shortName: "Sequins Saree",
    price: "₹ 4,299.00",
  },
  {
    src: "https://cdn.pixabay.com/photo/2025/10/06/09/01/srishti-textile-9876599_1280.jpg",
    name: "Elegant Black Saree with golden zari border and silk finish",
    shortName: "Black Saree",
    price: "₹ 2,599.00",
  },
];

export default function MultiCarousel() {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const firstCard = track.querySelector(".card");
    const gap = parseFloat(getComputedStyle(track).gap) || 0;
    const cardWidth = firstCard.getBoundingClientRect().width + gap;

    const interval = setInterval(() => {
      if (track.scrollLeft + track.clientWidth >= track.scrollWidth - 1) {
        track.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        track.scrollBy({ left: cardWidth, behavior: "smooth" });
      }
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="carousel-section">
      {/* Section Header */}
      <div className="carousel-header">
        <h2>Newly Launched</h2>
        <a href="/all-products" className="view-all">
          View All
        </a>
      </div>

      {/* Carousel */}
      <div className="carousel-track" ref={trackRef}>
        {images.map((img, i) => (
          <figure className="card" key={i}>
            <img src={img.src} alt={img.shortName} loading="lazy" />
            <figcaption>
              <div className="saree-name" title={img.name}>
                {img.name}
              </div>
              <div className="saree-price">{img.price}</div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}