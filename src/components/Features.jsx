import { useState, useEffect } from 'react';

const Features = () => {
  const [activeFeature, setActiveFeature] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const featuresData = [
    {
      id: 1,
      icon: "⏰",
      title: "24/7 Access",
      description: "Access your medical records and schedule appointments anytime, anywhere with our secure platform.",
      detailedInfo: "Our platform is available 24/7, ensuring you can access your medical information whenever you need it. No more waiting for clinic hours! Get real-time updates and notifications.",
      benefits: ["Anytime access", "Real-time updates", "No clinic hours restriction", "Emergency access"]
    },
    {
      id: 2,
      icon: "🔐",
      title: "Secure & Private",
      description: "Your health data is protected with enterprise-grade security and data protection compliance.",
      detailedInfo: "We use end-to-end encryption and comply with HIPAA, GDPR, and other data protection regulations to keep your information safe. Your privacy is our top priority.",
      benefits: ["End-to-end encryption", "HIPAA compliant", "GDPR compliant", "Military-grade security"]
    },
    {
      id: 3,
      icon: "📱",
      title: "Mobile First",
      description: "Designed for mobile devices with an intuitive interface that works on all screen sizes.",
      detailedInfo: "Optimized for iOS and Android with offline capabilities and push notifications for important updates. Download once, use everywhere.",
      benefits: ["iOS & Android", "Offline mode", "Push notifications", "Cross-platform sync"]
    }
  ];

  const handleFeatureClick = (featureId) => {
    setActiveFeature(featureId);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseFeature = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setActiveFeature(null);
      document.body.style.overflow = 'auto';
    }, 300);
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') handleCloseFeature();
    };

    if (isModalOpen) {
      window.addEventListener('keydown', handleEscape);
    }

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isModalOpen]);

  const selectedFeature = featuresData.find(f => f.id === activeFeature);

  return (
    <>
      <section className="features-section" id="features">
        <div className="section-header">
          <h2 className="section-title">
            WHY CHOOSE <span className="highlight">MediAid</span>?
          </h2>
          <p className="section-subtitle">
            Discover the features that make MediAid the trusted choice for healthcare management
          </p>
        </div>

        <div className="features-grid">
          {featuresData.map((feature) => (
            <div 
              key={feature.id}
              className={`feature-card ${activeFeature === feature.id ? 'active' : ''}`}
              onClick={() => handleFeatureClick(feature.id)}
            >
              <div className="icon-circle">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <button 
                className="learn-more-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  handleFeatureClick(feature.id);
                }}
              >
                Learn More →
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Feature Detail Modal */}
      <div className={`feature-modal-overlay ${isModalOpen ? 'open' : ''}`} onClick={handleCloseFeature}>
        <div className="feature-modal" onClick={(e) => e.stopPropagation()}>
          <button className="modal-close-btn" onClick={handleCloseFeature} aria-label="Close">
            ✕
          </button>
          
          {selectedFeature && (
            <div className="feature-modal-content">
              <div className="modal-icon">{selectedFeature.icon}</div>
              <h2>{selectedFeature.title}</h2>
              <p className="modal-description">{selectedFeature.detailedInfo}</p>
              
              {selectedFeature.benefits && (
                <div className="modal-benefits">
                  <h4>Key Benefits:</h4>
                  <ul>
                    {selectedFeature.benefits.map((benefit, index) => (
                      <li key={index}>✓ {benefit}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              <div className="modal-actions">
                <button className="btn-secondary" onClick={handleCloseFeature}>
                  Close
                </button>
                <button className="btn-primary">
                  Try This Feature
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Features;