import React, { useState } from "react";
import "./ProductListPage.css";
import { Link } from "react-router-dom";

const products = [
    {
        id: 1,
        name: "Pastel Blue Saree",
        image: "https://images.pexels.com/photos/1229414/pexels-photo-1229414.jpeg",
        price: 1899,
        inStock: false,
        category: "Designer",
        occasion: "Daily Wear",
        color: "Blue",
    },
    {
        id: 2,
        name: "Peachish Pink Saree",
        image: "https://images.pexels.com/photos/27103969/pexels-photo-27103969.jpeg",
        price: 2199,
        inStock: true,
        category: "Traditional",
        occasion: "Festival",
        color: "Pink",
    },
    {
        id: 3,
        name: "Peachish Pink Saree",
        image: "https://images.pexels.com/photos/1446161/pexels-photo-1446161.jpeg",
        price: 3199,
        inStock: true,
        category: "Traditional",
        occasion: "Festival",
        color: "Pink",
    },
    {
        id: 4,
        name: "Peachish Pink Saree",
        image: "https://images.pexels.com/photos/15181108/pexels-photo-15181108.jpeg",
        price: 3199,
        inStock: true,
        category: "Traditional",
        occasion: "Festival",
        color: "Pink",
    },
    {
        id: 5,
        name: "Peachish Pink Saree",
        image: "https://images.pexels.com/photos/27790205/pexels-photo-27790205.jpeg",
        price: 3199,
        inStock: true,
        category: "Traditional",
        occasion: "Festival",
        color: "Pink",
    }
];

function ProductListPage() {
    const [category, setCategory] = useState("All");
    const [occasion, setOccasion] = useState("All");
    const [stock, setStock] = useState("All");
    const [color, setColor] = useState("All");
    const [sort, setSort] = useState("Default");

    let filtered = products.filter(p =>
        (category === "All" || p.category === category) &&
        (occasion === "All" || p.occasion === occasion) &&
        (stock === "All" ||
            (stock === "In stock" && p.inStock) ||
            (stock === "Out of stock" && !p.inStock)) &&
        (color === "All" || p.color === color)
    );
    if (sort === "Price: Low to High") filtered.sort((a, b) => a.price - b.price);
    else if (sort === "Price: High to Low") filtered.sort((a, b) => b.price - a.price);
    else if (sort === "Name") filtered.sort((a, b) => a.name.localeCompare(b.name));

    return (
        <div className="plp-container">
            <aside className="plp-sidebar">
                <h3>Category</h3>
                {["All", "Designer", "Traditional"].map(c => (
                    <div key={c}>
                        <input type="radio" id={c} name="category"
                            checked={category === c}
                            onChange={() => setCategory(c)} />
                        <label htmlFor={c}>{c}</label>
                    </div>
                ))}
                <h3>Occasion</h3>
                {["All", "Daily Wear", "Festival"].map(o => (
                    <div key={o}>
                        <input type="radio" id={o} name="occasion"
                            checked={occasion === o}
                            onChange={() => setOccasion(o)} />
                        <label htmlFor={o}>{o}</label>
                    </div>
                ))}
                <h3>Stock</h3>
                {["All", "In stock", "Out of stock"].map(s => (
                    <div key={s}>
                        <input type="radio" id={s} name="stock"
                            checked={stock === s}
                            onChange={() => setStock(s)} />
                        <label htmlFor={s}>{s}</label>
                    </div>
                ))}
                <h3>Color</h3>
                {["All", "Blue", "Pink"].map(cl => (
                    <div key={cl}>
                        <input type="radio" id={cl} name="color"
                            checked={color === cl}
                            onChange={() => setColor(cl)} />
                        <label htmlFor={cl}>{cl}</label>
                    </div>
                ))}
            </aside>
            <main className="plp-main">
                <div className="plp-sort-bar">
                    <span>Sort by:</span>
                    <select value={sort} onChange={e => setSort(e.target.value)}>
                        <option value="Default">Default</option>
                        <option value="Price: Low to High">Price: Low to High</option>
                        <option value="Price: High to Low">Price: High to Low</option>
                        <option value="Name">Name</option>
                    </select>
                    <span className="plp-count">{filtered.length} products found</span>
                </div>
                <div className="plp-grid">
                    {filtered.length === 0 ? (
                        <div className="plp-empty">No products match selected filters.</div>
                    ) : (
                        filtered.map(p => (
                            <Link to={`/products/details/${p.id}`}>
                                <div key={p.id} className="plp-card">
                                    <div className="plp-card-img">
                                        <img src={p.image} alt={p.name} />
                                        {!p.inStock && <span className="plp-soldout">SOLD OUT</span>}
                                    </div>
                                    <div className="plp-card-info">
                                        <div className="plp-card-name">{p.name}</div>
                                        <div className="plp-card-price">₹ {p.price}.00</div>
                                        <div className="plp-card-meta">
                                            {p.category} | {p.occasion} | {p.color}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))
                    )}
                </div>
            </main>
        </div>
    );
}

export default ProductListPage;
