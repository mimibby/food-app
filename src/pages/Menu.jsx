// src/pages/Menu.jsx
import { useState } from 'react';
import MenuItem from '../components/MenuItem';
import { menuItems } from '../data';

function Menu({ addToCart }) {
  const [category, setCategory] = useState('all');

  const filteredItems =
    category === 'all'
      ? menuItems
      : menuItems.filter((item) => item.category === category);

  return (
    <div className="menu">
      <h2>Our Menu</h2>
      <div className="menu-filters">
        <button onClick={() => setCategory('all')}>All</button>
        <button onClick={() => setCategory('mains')}>Mains</button>
        <button onClick={() => setCategory('sides')}>Sides</button>
        <button onClick={() => setCategory('drinks')}>Drinks</button>
      </div>
      <div className="menu-grid">
        {filteredItems.map((item) => (
          <MenuItem key={item.id} item={item} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

export default Menu;