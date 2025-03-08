import React from 'react';
// import './App.css';

function Homep() {
  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        Annual Tech Conference 2025
      </header>

      {/* Hero Section with Animated Background */}
      <section className="hero">
        <div className="animated-bg"></div>
        <div className="hero-content">
          <h1>Welcome to the Annual Tech Conference</h1>
          <p>Explore the future of technology and innovation</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-column small">
          <h3>About</h3>
          <ul>
            <li><a href="#">Our Mission</a></li>
            <li><a href="#">The Team</a></li>
            <li><a href="#">Our Story</a></li>
          </ul>
        </div>
        <div className="footer-column small">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">FAQs</a></li>
          </ul>
        </div>
        <div className="footer-column small">
          <h3>Connect</h3>
          <ul>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Support</a></li>
            <li><a href="#">Social Media</a></li>
          </ul>
        </div>
      </footer>

      <style jsx>{`
        body {
          margin: 0;
          font-family: 'Montserrat', sans-serif;
          background: black;
          color: #e0e1dd;
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .app {
          text-align: center;
          height: 100%;
        }
        .header {
          background: black;
          color: white;
          padding: 100px 20px;
          font-size: 3rem;
          font-weight: bold;
          font-family: 'Montserrat', sans-serif;
          animation: slideDown 1.5s ease-in-out;
        }
        @keyframes slideDown {
          from { transform: translateY(-100px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .hero {
          position: relative;
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          color: white;
          text-align: center;
          overflow: hidden;
        }
        .animated-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle, rgba(0, 180, 216, 0.8), rgba(0, 128, 128, 0.6));
          animation: backgroundAnimation 10s infinite linear;
          z-index: 0;
        }
        @keyframes backgroundAnimation {
          0% { transform: scale(1); }
          50% { transform: scale(1.2); }
          100% { transform: scale(1); }
        }
        .hero-content {
          position: relative;
          z-index: 1;
          animation: fadeIn 2s ease-in-out, slideUp 2s ease-in-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { transform: translateY(50px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .footer {
          background: black;
          padding: 60px 20px;
          display: flex;
          justify-content: space-around;
          flex-wrap: wrap;
          gap: 20px;
        }
        .footer-column.small {
          flex: 1;
          min-width: 200px;
          background: rgba(255, 255, 255, 0.1);
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 10px 20px rgba(255, 255, 255, 0.2);
          transition: all 0.3s ease-in-out;
        }
        .footer-column.small:hover {
          transform: translateY(-10px) scale(1.05);
          background: rgba(255, 255, 255, 0.2);
        }
        .footer-column h3 {
          font-size: 1.5rem;
          margin-bottom: 15px;
          color: #00b4d8;
          font-family: 'Montserrat', sans-serif;
        }
        .footer-column ul {
          list-style: none;
          padding: 0;
        }
        .footer-column li {
          margin: 10px 0;
        }
        .footer-column a {
          color: #00b4d8;
          text-decoration: none;
          font-size: 1.1rem;
          transition: color 0.3s ease-in-out;
        }
        .footer-column a:hover {
          color: #ffffff;
        }
      `}</style>
    </div>
  );
}

export default Homep;
