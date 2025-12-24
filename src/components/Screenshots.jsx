import { useState, useEffect } from 'react';

const Screenshots = () => {
  const [activeScreenshot, setActiveScreenshot] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const screenshotData = [
    { 
      id: 1, 
      title: "Profile", 
      description: "Manage your personal health profile, update medical history, and track vital signs",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=1200&fit=crop",
      features: [
        "Personal health dashboard",
        "Medical history tracking",
        "Emergency contact setup",
        "Insurance information"
      ]
    },
    { 
      id: 2, 
      title: "Medication Alerts", 
      description: "Never miss a dose with smart reminders and medication tracking",
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&h=1200&fit=crop",
      features: [
        "Custom medication reminders",
        "Refill notifications",
        "Dosage tracking",
        "Interactions checker"
      ]
    },
    { 
      id: 3, 
      title: "Medical Records", 
      description: "Access your complete medical history, lab results, and doctor notes",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&h=1200&fit=crop",
      features: [
        "Digital health records",
        "Lab results viewer",
        "Prescription history",
        "Doctor visit summaries"
      ]
    },
    { 
      id: 4, 
      title: "Dashboard", 
      description: "Your health overview at a glance with insights and recommendations",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=1200&fit=crop",
      features: [
        "Health metrics dashboard",
        "Trend analysis",
        "Personalized insights",
        "Health goal tracking"
      ]
    }
  ];

  const handleScreenshotClick = (id) => {
    setActiveScreenshot(id);
    const screenshot = screenshotData.find(item => item.id === id);
    if (screenshot) {
      setSelectedImage(screenshot);
      setIsModalOpen(true);
      document.body.style.overflow = 'hidden';
    }
  };

  const closeScreenshot = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setActiveScreenshot(null);
      setSelectedImage(null);
      document.body.style.overflow = 'auto';
    }, 300);
  };

  const handleNext = () => {
    const currentIndex = screenshotData.findIndex(item => item.id === activeScreenshot);
    const nextIndex = (currentIndex + 1) % screenshotData.length;
    handleScreenshotClick(screenshotData[nextIndex].id);
  };

  const handlePrev = () => {
    const currentIndex = screenshotData.findIndex(item => item.id === activeScreenshot);
    const prevIndex = (currentIndex - 1 + screenshotData.length) % screenshotData.length;
    handleScreenshotClick(screenshotData[prevIndex].id);
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') closeScreenshot();
    };
    
    if (isModalOpen) {
      window.addEventListener('keydown', handleEscape);
    }
    
    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isModalOpen]);

  return (
    <>
      <section className="screenshots-section" id="screenshots">
        <div className="section-header">
          <h2 className="section-title">BE ON TOP OF YOUR HEALTH</h2>
          <p className="section-subtitle">
            A platform that connects you to better healthcare. Preview our app screens below.
          </p>
        </div>

        <div className="screenshots-grid">
          {screenshotData.map((item) => (
            <div 
              key={item.id}
              className="screenshot-card"
              onClick={() => handleScreenshotClick(item.id)}
            >
              <div className="screenshot-thumbnail">
                <div className="phone-frame">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    loading="lazy"
                    className="thumbnail-image"
                  />
                </div>
                <div className="play-overlay">
                  <div className="play-icon">▶</div>
                </div>
              </div>
              <div className="screenshot-info">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <button 
                  className="view-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleScreenshotClick(item.id);
                  }}
                >
                  View Screenshot →
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="screenshots-gallery">
          <h3 className="gallery-title">App Screens Preview</h3>
          <div className="thumbnail-gallery">
            {screenshotData.map((item) => (
              <div 
                key={item.id}
                className={`thumbnail-item ${activeScreenshot === item.id ? 'active' : ''}`}
                onClick={() => handleScreenshotClick(item.id)}
              >
                <img 
                  src={item.image} 
                  alt={item.title}
                  loading="lazy"
                  className="gallery-thumbnail"
                />
                <div className="thumbnail-label">{item.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshot Modal */}
      <div className={`screenshot-modal-overlay ${isModalOpen ? 'open' : ''}`} onClick={closeScreenshot}>
        <div className="screenshot-modal" onClick={(e) => e.stopPropagation()}>
          <button className="modal-close-btn" onClick={closeScreenshot} aria-label="Close">
            ✕
          </button>
          
          {selectedImage && (
            <div className="modal-content">
              <div className="modal-image-container">
                <img 
                  src={selectedImage.image} 
                  alt={selectedImage.title}
                  className="modal-image"
                />
                <button className="nav-btn prev-btn" onClick={(e) => { e.stopPropagation(); handlePrev(); }}>
                  ‹
                </button>
                <button className="nav-btn next-btn" onClick={(e) => { e.stopPropagation(); handleNext(); }}>
                  ›
                </button>
              </div>
              
              <div className="modal-info">
                <h2>{selectedImage.title}</h2>
                <p className="modal-description">{selectedImage.description}</p>
                
                {selectedImage.features && (
                  <div className="modal-features">
                    <h4>Key Features:</h4>
                    <ul>
                      {selectedImage.features.map((feature, index) => (
                        <li key={index}>✓ {feature}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <div className="modal-actions">
                  <button className="btn-secondary" onClick={closeScreenshot}>
                    Close Preview
                  </button>
                  <button className="btn-primary" onClick={() => {
                    closeScreenshot();
                    const downloadBtn = document.querySelector('.download-btn');
                    if (downloadBtn) downloadBtn.click();
                  }}>
                    Download App
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Screenshots;