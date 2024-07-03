import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  const navigate = useNavigate();

  const navigateToGenerator = () => {
    navigate('/generate');
  };

  return (
    <div className="landing-page">
      <nav className="navbar">
        <div className="logo">AI Poetry Generator</div>
        <ul className="nav-links">
          <li><a href="#features">Features</a></li>
          <li><a href="#description">Description</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <header className="header">
        <h1>Transform Air Pollution Data into Poetic Masterpieces</h1>
        <p>Our AI uses real-time air pollution data to inspire unique and meaningful poems.</p>
        <button onClick={navigateToGenerator} className="cta-button">Create Your Poem</button>
      </header>

      <section id="features" className="features">
        <h2>Features</h2>
        <div className="feature">
          <h3>AI-Generated Poetry</h3>
          <p>Leverage the power of AI to create poetry that reflects the current state of air quality.</p>
        </div>
        <div className="feature">
          <h3>Easy to Use</h3>
          <p>Simply enter your location, and our AI will generate a poem based on local air pollution data.</p>
        </div>
        <div className="feature">
          <h3>Raise Awareness</h3>
          <p>Share your poems to spread awareness about air pollution and its impacts.</p>
        </div>
      </section>

      <section id="description" className="description">
        <h2>Project Description</h2>
        <p>This project aims to merge the realms of environmental science and literature through the use of artificial intelligence. By analyzing real-time air pollution data, our AI generates poems that reflect the state of the environment. The goal is to raise awareness about air quality issues and inspire people to take action through the power of poetry. Our platform provides a creative and engaging way to connect with important environmental data, transforming numbers and statistics into emotional and impactful literary works.</p>
      </section>

      <section id="testimonials" className="testimonials">
        <h2>Testimonials</h2>
        <div className="testimonial">
          <p>"This AI poetry generator is not only creative but also raises awareness about environmental issues."</p>
          <h4>- Alex</h4>
        </div>
        <div className="testimonial">
          <p>"I love how the poems reflect the current air quality. It's a beautiful blend of art and science."</p>
          <h4>- Jordan</h4>
        </div>
      </section>

      <footer id="contact" className="footer">
        <div className="footer-content">
          <h3>Contact Us</h3>
          <p>Email: support@aipoetrygenerator.com</p>
          <div className="social-media">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <img src="https://img.freepik.com/free-psd/3d-square-with-facebook-logo_125540-1565.jpg?t=st=1718348087~exp=1718351687~hmac=94e91cc26bedaf2cd13dccf6af715864ab8666ef7308f1e51b427b6e4ccdf2b4&w=740" alt="Facebook" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <img src="https://img.freepik.com/free-psd/social-media-logo-design_23-2151296981.jpg?t=st=1718348057~exp=1718351657~hmac=d5b6ae4a2faecee2b9e6a39a2a1fcb2b31e591ae40c9414e818b4e642ddb8017&w=740" alt="Twitter" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <img src="https://img.freepik.com/free-psd/instagram-application-logo_23-2151544102.jpg?w=740&t=st=1718348008~exp=1718348608~hmac=7b0956c77d241702c0cfaae6a742b8ca5fd0ca08b68fde0d31315dc7b66e7d19" alt="Instagram" />
            </a>
          </div>
        </div>
        <p>&copy; 2024 AI Poetry Generator. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
