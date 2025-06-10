// src/components/MenuItem.jsx
function MenuItem({ item, addToCart }) {
  return (
    <div className="menu-item">
      <img src={item.image} alt={item.name} />
      <div className="menu-item-details">
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <p className="price">${item.price.toFixed(2)}</p>
        <button onClick={() => addToCart(item)}>Add to Cart</button>
      </div>
    </div>
  );
}

export default MenuItem;
