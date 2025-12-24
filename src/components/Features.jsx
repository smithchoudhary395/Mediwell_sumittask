import { useState } from 'react';

const Features = () => {
  const [activeFeature, setActiveFeature] = useState(null);

  const featuresData = [
    {
      id: 1,
      icon: "⏰",
      title: "24/7 Access",
      description: "Access your medical records and schedule appointments anytime, anywhere with our secure platform.",
      detailedInfo: "Our platform is available 24/7, ensuring you can access your medical information whenever you need it. No more waiting for clinic hours!"
    },
    {
      id: 2,
      icon: "🔐",
      title: "Secure & Private",
      description: "Your health data is protected with enterprise-grade security and data protection compliance.",
      detailedInfo: "We use end-to-end encryption and comply with HIPAA, GDPR, and other data protection regulations to keep your information safe."
    },
    {
      id: 3,
      icon: "📱",
      title: "Mobile First",
      description: "Designed for mobile devices with an intuitive interface that works on all screen sizes.",
      detailedInfo: "Optimized for iOS and Android with offline capabilities and push notifications for important updates."
    }
  ];

  const handleFeatureClick = (featureId) => {
    setActiveFeature(featureId);
    // Ya phir modal open karein
    // openFeatureModal(featureId);
  };

  const handleCloseFeature = () => {
    setActiveFeature(null);
  };

  return (
    <>
      <section className="features-section" id="features">
        <h2 className="features-title">
          WHY CHOOSE <span>MediAid</span>?
        </h2>

        <p className="features-subtitle">
          Discover the features that make MediAid the trusted choice for healthcare management
        </p>

        <div className="features-grid">
          {featuresData.map((feature) => (
            <div 
              key={feature.id}
              className={`feature-card ${activeFeature === feature.id ? 'active' : ''}`}
              onClick={() => handleFeatureClick(feature.id)}
              style={{ cursor: 'pointer' }}
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
      {activeFeature && (
        <div className="feature-modal-overlay" onClick={handleCloseFeature}>
          <div className="feature-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={handleCloseFeature}>
              ✕
            </button>
            {featuresData
              .filter(f => f.id === activeFeature)
              .map(feature => (
                <div key={feature.id} className="feature-modal-content">
                  <div className="modal-icon">{feature.icon}</div>
                  <h2>{feature.title}</h2>
                  <p className="modal-description">{feature.detailedInfo}</p>
                  <div className="modal-actions">
                    <button className="btn-secondary" onClick={handleCloseFeature}>
                      Close
                    </button>
                    <button className="btn-primary">
                      Try This Feature
                    </button>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      )}
    </>
  );
};

export default Features;