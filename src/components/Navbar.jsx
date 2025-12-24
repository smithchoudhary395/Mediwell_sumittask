import { useState, useEffect } from 'react';

const Navbar = ({ theme, toggleTheme }) => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
  const scrollToTestimonials = () => {
    document.getElementById("testimonials")?.scrollIntoView({
      behavior: "smooth",
    });
  };
  
  <li onClick={scrollToTestimonials}>Testimonials</li>
  
  

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

  useEffect(() => {
    const handleScroll = () => {
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

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <h2 
            className="logo" 
            onClick={() => scrollToSection('home')}
            style={{ cursor: 'pointer' }}
          >
            <span className="logo-icon">💙</span> Mediwell
          </h2>

          <button 
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
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

        {isMobileMenuOpen && (
          <div className="mobile-menu">
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
                {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
              </li>
            </ul>
            <button 
              className="btn-primary mobile-download-btn" 
              onClick={handleDownload}
            >
              Download App
            </button>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;