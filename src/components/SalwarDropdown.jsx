import React from "react";
import "./SalwarDropdown.css";

// You can replace these image links with real product/category images as you want
const swatches = {
  Red: "#c2202f", Blue: "#60a5fa", Green: "#cbe83e", Black: "#222", White: "#f3f3f3", Beige: "#ae9173",
  Maroon: "#7c263f", Pink: "#eb92b8", Peach: "#fbbca5"
};
const priceBadges = [
  { color: "#a21dcb", label: "BELOW ₹1000", text: "Less than 1000", url: "https://neidhal.com/collections/dress-materials-below-1000" },
  { color: "#a21dcb", label: "₹1000-₹2000", text: "1000-2000", url: "https://neidhal.com/collections/dress-material-above-1000-to-2000" },
  { color: "#a21dcb", label: "ABOVE ₹2000", text: "2000 and above", url: "https://neidhal.com/collections/dress-materials-above-2000" },
];

export default function SalwarDropdown() {
  return (
    <div className="salwar-dropdown-menu">
      {/* By Fabric */}
      <div className="mega-dropdown-col">
        <div className="mega-dropdown-title">By Fabric</div>
        <div className="mega-dropdown-fabgrid">
          <a href="https://neidhal.com/collections/cotton-salwar-materials" className="fabric-link">
            <img src="/images/fabric-cotton.jpg" alt="Cotton" /><span>Cotton</span>
          </a>
          <a href="https://neidhal.com/collections/silk-dress-material" className="fabric-link">
            <img src="/images/fabric-silk.jpg" alt="Silk" /><span>Silk</span>
          </a>
          <a href="https://neidhal.com/collections/organza-dress-material" className="fabric-link">
            <img src="/images/fabric-organza.jpg" alt="Organza" /><span>Organza</span>
          </a>
          <a href="https://neidhal.com/collections/cotton-silk-dress-material" className="fabric-link">
            <img src="/images/fabric-silkcotton.jpg" alt="Silk Cotton" /><span>Silk Cotton</span>
          </a>
          <a href="https://neidhal.com/collections/linen-dress-material" className="fabric-link">
            <img src="/images/fabric-linen.jpg" alt="Linen" /><span>Linen</span>
          </a>
          <a href="https://neidhal.com/collections/georgette-dress-material" className="fabric-link">
            <img src="/images/fabric-georgette.jpg" alt="Georgette" /><span>Georgette</span>
          </a>
          <a href="https://neidhal.com/collections/kota-dress-material" className="fabric-link">
            <img src="/images/fabric-kota.jpg" alt="Kota" /><span>Kota</span>
          </a>
          <a href="https://neidhal.com/collections/dress-fabric-material" className="fabric-link">
            <img src="/images/fabric-others.jpg" alt="Others" /><span>Others</span>
          </a>
        </div>
      </div>
      {/* By Occasion */}
      <div className="mega-dropdown-col">
        <div className="mega-dropdown-title">By Occasion</div>
        <a href="https://neidhal.com/collections/daily-wear-dress-materials" className="occas-link">
          <img src="/images/occasion-daily.jpg" alt="Daily Wear" /><span>Daily Wear</span>
        </a>
        <a href="https://neidhal.com/collections/office-wear-salwar" className="occas-link">
          <img src="/images/occasion-office.jpg" alt="Office Wear" /><span>Office Wear</span>
        </a>
        <a href="https://neidhal.com/collections/festival-salwar-suit" className="occas-link">
          <img src="/images/occasion-festive.jpg" alt="Festive wear" /><span>Festive wear</span>
        </a>
        <a href="https://neidhal.com/collections/party-wear-dress-material-for-ladies" className="occas-link">
          <img src="/images/occasion-party.jpg" alt="Party Wear" /><span>Party Wear</span>
        </a>
      </div>
      {/* By Color */}
      <div className="mega-dropdown-col">
        <div className="mega-dropdown-title">By Color</div>
        <div className="mega-dropdown-colorgrid">
          {Object.entries(swatches).map(([color, hex]) => (
            <a key={color} href={`https://neidhal.com/collections/${color.toLowerCase()}-colour-dress-material`} className="color-link">
              <span className="color-dot" style={{ background: hex }}></span>
              {color}
            </a>
          ))}
        </div>
      </div>
      {/* By Price */}
      <div className="mega-dropdown-col">
        <div className="mega-dropdown-title">By Price</div>
        <div className="mega-dropdown-pricegrid">
          {priceBadges.map(badge => (
            <a href={badge.url} className="price-badge-link" key={badge.label}>
              <span className="price-badge" style={{ background: badge.color }}>{badge.label}</span>
              <span className="price-badge-text">{badge.text}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
