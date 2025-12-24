import { useState, useEffect } from 'react';

const Navbar = ({ theme, toggleTheme }) => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      const sections = ['home', 'features', 'screenshots', 'testimonials'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection && currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      setActiveSection(sectionId);
    }
    setIsMobileMenuOpen(false);
  };

  const handleDownload = () => {
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const isAndroid = /Android/.test(navigator.userAgent);
    
    if (isIOS) {
      window.open('https://apps.apple.com/app/mediwell/id123456789', '_blank');
    } else if (isAndroid) {
      window.open('https://play.google.com/store/apps/details?id=com.mediwell.app', '_blank');
    } else {
      window.open('https://play.google.com/store/apps/details?id=com.mediwell.app', '_blank');
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <h2 
          className="logo" 
          onClick={() => scrollToSection('home')}
        >
          <span className="logo-icon">💙</span> Mediwell
        </h2>

        <button 
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? '✕' : '☰'}
        </button>

        <ul className="desktop-menu">
          <li 
            className={activeSection === 'home' ? 'active' : ''}
            onClick={() => scrollToSection('home')}
          >
            Home
          </li>
          <li 
            className={activeSection === 'features' ? 'active' : ''}
            onClick={() => scrollToSection('features')}
          >
            Features
          </li>
          <li 
            className={activeSection === 'screenshots' ? 'active' : ''}
            onClick={() => scrollToSection('screenshots')}
          >
            Screenshots
          </li>
          <li 
            className={activeSection === 'testimonials' ? 'active' : ''}
            onClick={() => scrollToSection('testimonials')}
          >
            Testimonials
          </li>
        </ul>

        <div className="nav-actions">
          <button 
            className="theme-toggle-btn"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
          
          <button 
            className="btn-primary download-btn" 
            onClick={handleDownload}
          >
            <span className="btn-icon">⬇️</span>
            Download App
          </button>
        </div>
      </div>

      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'open' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>
        <div className="mobile-menu" onClick={(e) => e.stopPropagation()}>
          <button 
            className="mobile-close-btn"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            ✕
          </button>
          
          <ul>
            <li 
              className={activeSection === 'home' ? 'active' : ''}
              onClick={() => scrollToSection('home')}
            >
              Home
            </li>
            <li 
              className={activeSection === 'features' ? 'active' : ''}
              onClick={() => scrollToSection('features')}
            >
              Features
            </li>
            <li 
              className={activeSection === 'screenshots' ? 'active' : ''}
              onClick={() => scrollToSection('screenshots')}
            >
              Screenshots
            </li>
            <li 
              className={activeSection === 'testimonials' ? 'active' : ''}
              onClick={() => scrollToSection('testimonials')}
            >
              Testimonials
            </li>
            <li className="mobile-theme-toggle" onClick={toggleTheme}>
              {theme === 'light' ? '🌙 Switch to Dark Mode' : '☀️ Switch to Light Mode'}
            </li>
          </ul>
          
          <button 
            className="btn-primary mobile-download-btn" 
            onClick={handleDownload}
          >
            Download App
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;