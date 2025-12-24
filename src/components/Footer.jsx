const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:support@mediwell.com';
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h2 className="footer-logo">
            <span className="logo-icon">💙</span> Mediwell
          </h2>
          <p className="footer-tagline">
            Your health, our priority. Making healthcare accessible for everyone.
          </p>
          <div className="footer-social">
            <a href="#" aria-label="Twitter">🐦</a>
            <a href="#" aria-label="Facebook">📘</a>
            <a href="#" aria-label="Instagram">📷</a>
            <a href="#" aria-label="LinkedIn">💼</a>
          </div>
        </div>
        
        <div className="footer-links">
          <div className="footer-column">
            <h3>Product</h3>
            <ul>
              <li><a href="#features">Features</a></li>
              <li><a href="#screenshots">Screenshots</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
              <li><a href="#download" onClick={(e) => {
                e.preventDefault();
                const downloadBtn = document.querySelector('.download-btn');
                if (downloadBtn) downloadBtn.click();
              }}>Download</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3>Company</h3>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms of Service</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3>Contact</h3>
            <ul>
              <li><button className="footer-contact-btn" onClick={handleEmailClick}>✉️ support@mediwell.com</button></li>
              <li>📞 +1 (555) 123-4567</li>
              <li>📍 123 Health Street, Medical City</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>© {currentYear} Mediwell. All Rights Reserved.</p>
        <div className="footer-actions">
          <button 
            className="back-to-top"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            ↑ Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;