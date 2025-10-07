

import './App.css';
import Header from './Header';
import Footer from './Footer';

import { useState } from 'react';
import Product from './Product';

const products = [
  {
    name: 'Banarasi Silk Saree',
    image: 'https://www.likeadiva.com/media/pimages/16139838789083E-1.jpg',
    description: 'Elegant Banarasi silk saree with intricate golden zari work, perfect for weddings and festive occasions.',
    price: '₹8,500',
    category: 'Silk Sarees',
  },
  {
    name: 'Kanjivaram Saree',
    image: 'https://tse4.mm.bing.net/th/id/OIP.E7doW8N1pEsO7OvfmQtefAHaKa?cb=12&pid=ImgDet&w=178&h=249&c=7&dpr=1.5&o=7&rm=3',
    description: 'Traditional Kanjivaram saree in vibrant colors, handwoven with pure silk and gold thread.',
    price: '₹12,000',
    category: 'Silk Sarees',
  },
  {
    name: 'Chanderi Cotton Saree',
    image: 'https://tse4.mm.bing.net/th/id/OIP.8JhmN5FlB__BiCWd2W-m9gHaJ2?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3',
    description: 'Lightweight Chanderi cotton saree with subtle motifs, ideal for summer wear.',
    price: '₹3,200',
    category: 'Cotton Sarees',
  },
  {
    name: 'Patola Saree',
    image: 'https://www.bing.com/th/id/OIP.dXF4uoeHPTa6wt2RoCnTuwHaJ4?w=162&h=211&c=8&rs=1&qlt=90&o=6&cb=12&dpr=1.5&pid=3.1&rm=2',
    description: 'Vibrant Patola saree featuring double ikat patterns, a true masterpiece from Gujarat.',
    price: '₹15,000',
    category: 'Silk Sarees',
  },
  {
    name: 'Tussar Silk Saree',
    image: 'https://th.bing.com/th/id/OIP.BQ_q3sf92af3bKy0haV1qQHaLu?w=198&h=314&c=7&r=0&o=7&cb=12&dpr=1.5&pid=1.7&rm=3',
    description: 'Natural Tussar silk saree with earthy tones and a soft texture, perfect for all occasions.',
    price: '₹6,800',
    category: 'Silk Sarees',
  },
  {
    name: 'Paithani Saree',
    image: 'https://tse3.mm.bing.net/th/id/OIP.hOxKxWtdDqOEkN4TlSK4OgHaIM?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3',
    description: 'Luxurious Paithani saree with peacock motifs and a rich pallu, handwoven in Maharashtra.',
    price: '₹18,500',
    category: 'Silk Sarees',
  },
  {
    name: 'Bandhani Saree',
    image: 'https://tse3.mm.bing.net/th/id/OIP.BAhl_yHJ3UDyC4VQQyjb5gHaNM?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3',
    description: 'Colorful Bandhani saree with traditional tie-dye patterns, a festive favorite.',
    price: '₹2,900',
    category: 'Partywear Sarees',
  },
  {
    name: 'Linen Saree',
    image: 'https://tse1.explicit.bing.net/th/id/OIP.IeJWN9tLgsS8Jjbq5bQWDQHaLH?cb=12&w=800&h=1200&rs=1&pid=ImgDetMain&o=7&rm=3',
    description: 'Breathable linen saree in pastel shades, perfect for summer elegance.',
    price: '₹4,500',
    category: 'Cotton Sarees',
  },
  {
    name: 'Georgette Embroidered Saree',
    image: 'https://tse1.explicit.bing.net/th/id/OIP.OLHT-CDbcDtSK4U57IfhCwHaIg?cb=12&w=696&h=800&rs=1&pid=ImgDetMain&o=7&rm=3',
    description: 'Stylish georgette saree with delicate embroidery and sequin work.',
    price: '₹5,200',
    category: 'Partywear Sarees',
  },
  {
    name: 'Cotton Printed Saree',
    image: 'https://tse2.mm.bing.net/th/id/OIP.g8Fzu7SrbBayRAirhNfv8wHaJQ?cb=12&w=520&h=650&rs=1&pid=ImgDetMain&o=7&rm=3',
    description: 'Comfortable cotton saree with vibrant prints for daily wear.',
    price: '₹1,800',
    category: 'Cotton Sarees',
  },
  {
    name: 'Red Bridal Saree',
    image: 'https://tse2.mm.bing.net/th/id/OIP.Ude3ZThDA73yi5V4-y3DFwHaJQ?cb=12&w=696&h=870&rs=1&pid=ImgDetMain&o=7&rm=3',
    description: 'Stunning red bridal saree with heavy embroidery, perfect for weddings.',
    price: '₹22,000',
    category: 'Partywear Sarees',
  },
  {
    name: 'Blue Designer Saree',
    image: 'https://tse3.mm.bing.net/th/id/OIP._nciQAishHFn4kCz3MCcTQHaHa?cb=12&pid=ImgDet&w=178&h=178&c=7&dpr=1.5&o=7&rm=3',
    description: 'Trendy blue designer saree with sequin work for parties and events.',
    price: '₹7,500',
    category: 'Partywear Sarees',
  },
  {
    name: 'Green Festive Saree',
    image: 'https://www.southindiafashion.com/wp-content/uploads/2019/09/EFsIk6TUwAArOo7-400x600.jpg',
    description: 'Festive green saree with golden border, ideal for celebrations.',
    price: '₹5,800',
    category: 'Partywear Sarees',
  },
  {
    name: 'Yellow Soft Silk Saree',
    image: 'https://i.pinimg.com/1200x/80/81/59/808159ed700cd63e7421f67192f6e258.jpg',
    description: 'Soft silk saree in yellow with subtle motifs and a rich pallu.',
    price: '₹9,200',
    category: 'Silk Sarees',
  },
  {
    name: 'Purple Kanchipuram Saree',
    image: 'https://tse4.mm.bing.net/th/id/OIP.Hc8XEsJLVDjlS5wm9VSHlwHaLH?cb=12&w=800&h=1200&rs=1&pid=ImgDetMain&o=7&rm=3',
    description: 'Royal purple Kanchipuram saree with silver zari work.',
    price: '₹13,500',
    category: 'Silk Sarees',
  },
  {
    name: 'Pink Partywear Saree',
    image: 'https://1.bp.blogspot.com/-3ivUvvVC8Q8/XhqR9ji7S9I/AAAAAAAAgRY/v4VanyrEK0ATzlil4E-t3lKYSstD4SwJQCLcBGAsYHQ/s640/sruthi-raj-tv-actress-saree-pics%2B%25284%2529.jpg',
    description: 'Chic pink saree with designer blouse, perfect for parties.',
    price: '₹6,700',
    category: 'Partywear Sarees',
  },
  {
    name: 'Orange Traditional Saree',
    image: 'https://tse1.explicit.bing.net/th/id/OIP.mPkEYXsloR9c9rAbPkEAXQHaJQ?cb=12&w=1080&h=1350&rs=1&pid=ImgDetMain&o=7&rm=3',
    description: 'Traditional orange saree with temple border and motifs.',
    price: '₹8,900',
    category: 'Silk Sarees',
  },
  {
    name: 'White Kerala Saree',
    image: 'https://5.imimg.com/data5/SELLER/Default/2020/10/BD/CU/UR/108280460/designer-saree.jpg',
    description: 'Classic white Kerala saree with golden border.',
    price: '₹3,600',
    category: 'Cotton Sarees',
  },
  {
    name: 'Black Georgette Saree',
    image: 'https://tse4.mm.bing.net/th/id/OIP.LXXkizz9ZzViMC6IGRlHMgHaJf?cb=12&w=1300&h=1667&rs=1&pid=ImgDetMain&o=7&rm=3',
    description: 'Elegant black georgette saree with minimalistic design.',
    price: '₹4,800',
    category: 'Partywear Sarees',
  },
  {
    name: 'Beige Handloom Saree',
    image: 'https://i.etsystatic.com/26828979/r/il/eb8050/4171732754/il_794xN.4171732754_2tup.jpg',
    description: 'Handloom beige saree with traditional patterns.',
    price: '₹5,400',
    category: 'Cotton Sarees',
  },
];

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Get unique categories
  const categories = ['All', ...Array.from(new Set(products.map(p => p.category)))];

  // Filter products by selected category
  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="textile-container">
      <Header />
      <section className="hero-section">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-title">Fibrance Sarees & Silks</h1>
            <p className="hero-subtitle">Discover the elegance of tradition. Shop our exclusive collection of handpicked sarees and silks for every occasion.</p>
            <a href="#products" className="hero-cta">Shop Now</a>
          </div>
        </div>
      </section>
      <section className="overview-section">
        <div className="overview-content">
          <h2>Why Choose Fibrance?</h2>
          <p>
            Fibrance Textiles brings you a curated collection of handcrafted sarees and silk products, blending tradition with modern design. Our artisans use sustainable materials and time-honored techniques to create unique, high-quality pieces for your wardrobe.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <div className="category-filter">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-btn${selectedCategory === cat ? ' active' : ''}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <main className="product-list" id="products">
        {filteredProducts.map((product, idx) => (
          <Product product={product} key={idx} />
        ))}
      </main>
      <Footer />
    </div>
  );
}

export default App;
