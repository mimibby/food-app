// src/pages/Home.jsx
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <h1>Welcome to Seri's Korean Delight</h1>
        <p>Authentic Korean cuisine delivered to your door</p>
        <Link to="/menu" className="cta-button">Explore Menu</Link>
      </section>
      <section className="featured">
        <h2>Featured Dishes</h2>
        <div className="featured-grid">
          <div className="featured-item">
            <img src="/images/bibimbap.jpg" alt="Bibimbap" />
            <h3>Bibimbap</h3>
            <p>A colorful mix of rice, veggies, and spicy sauce</p>
          </div>
          <div className="featured-item">
            <img src="/images/friedchicken.webp" alt="Korean Fried Chicken" />
            <h3>Korean Fried Chicken</h3>
            <p>Crispy chicken with sweet and spicy sauce</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;