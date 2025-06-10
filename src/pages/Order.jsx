// src/pages/Order.jsx
import Cart from '../components/Cart';

function Order({ cart, removeFromCart, submitOrder }) {
  return (
    <div className="order">
      <Cart
        cart={cart}
        removeFromCart={removeFromCart}
        submitOrder={submitOrder}
      />
    </div>
  );
}

export default Order;
