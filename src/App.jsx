import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

const whatsappLink = "https://wa.me/919749861665";
const mapsLink = "https://maps.app.goo.gl/YpjoQtwyg6RsaNjs7";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        🏥
        <span>Anubhav Medicals</span>
      </div>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products & Services</Link>
      </nav>
    </header>
  );
}

/* HOME PAGE */
function Home() {
  return (
    <>
      <section className="hero">
        <h1>Anubhav Medicals</h1>
        <p>Your trusted neighborhood medical store</p>
        <p className="timing">🕘 Open: 9 AM – 6 PM</p>
      </section>

      <section className="gallery">
        <img src="https://images.unsplash.com/photo-1580281657521-6b2b9e1aaf6f" />
        <img src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b" />
        <img src="https://images.unsplash.com/photo-1576765607924-bd0c7d0a8c04" />
      </section>

      <section className="location">
        <h2>Location</h2>
        <p>📍 Aravali Hostel, NITK, Surathkal, Mangalore</p>

        <a href={mapsLink} target="_blank" className="map-btn">
          📍 View on Google Maps
        </a>
      </section>

      <a href={whatsappLink} target="_blank" className="whatsapp-float">
        💬
      </a>
    </>
  );
}

/* PRODUCTS & SERVICES PAGE */
function Products() {
  return (
    <section className="products">
      <h1>Our Products</h1>

      <div className="grid">
        <div className="card">
          <img src="https://images.unsplash.com/photo-1584305574647-1b7b0b3b3e0f" />
          <p>Crocin</p>
        </div>

        <div className="card">
          <img src="https://images.unsplash.com/photo-1586015555751-63bb77f4322a" />
          <p>Rantac</p>
        </div>

        <div className="card">
          <img src="https://images.unsplash.com/photo-1612821745127-53855be9cbd0" />
          <p>Volini</p>
        </div>

        <div className="card">
          <img src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5" />
          <p>Bandages</p>
        </div>
      </div>

      <h1 className="service-title">Our Services</h1>

      <div className="grid">
        <div className="card">
          <img src="https://images.unsplash.com/photo-1580281658629-6a0d53a0b0fa" />
          <p>Allopathy medicines available</p>
        </div>

        <div className="card">
          <img src="https://images.unsplash.com/photo-1607619056574-7b8d3ee536b6" />
          <p>Homeopathy medicines available</p>
        </div>

        <div className="card">
          <img src="https://images.unsplash.com/photo-1580281657521-6b2b9e1aaf6f" />
          <p>Doctor appointments available</p>
        </div>

        <div className="card">
          <img src="https://images.unsplash.com/photo-1588776814477-6b3d4e7bb6c3" />
          <p>Blood sugar testing available</p>
        </div>
      </div>

      <Link to="/" className="back-btn">← Back to Home</Link>
    </section>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </>
  );
}
