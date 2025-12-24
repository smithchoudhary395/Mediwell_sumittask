import { useState, useEffect } from 'react';

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonialsData = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Patient with Diabetes",
      content: "Mediwell has completely transformed how I manage my diabetes. The medication reminders are a lifesaver! I can track my blood sugar levels and share reports with my doctor instantly.",
      rating: 5,
      avatar: "👩‍⚕️"
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      role: "Cardiologist",
      content: "As a healthcare provider, I recommend Mediwell to all my patients. It streamlines communication and care coordination. The secure messaging feature is excellent for follow-ups.",
      rating: 5,
      avatar: "👨‍⚕️"
    },
    {
      id: 3,
      name: "Robert Garcia",
      role: "Senior User",
      content: "The interface is so intuitive even for someone like me who's not tech-savvy. My family loves it too! We can share health updates and medication schedules easily.",
      rating: 4,
      avatar: "👴"
    },
    {
      id: 4,
      name: "Lisa Wang",
      role: "Busy Professional",
      content: "24/7 access to my medical records and easy appointment booking saves me hours every month. The prescription refill feature is incredibly convenient.",
      rating: 5,
      avatar: "👩‍💼"
    },
    {
      id: 5,
      name: "David Miller",
      role: "Fitness Enthusiast",
      content: "Love how Mediwell integrates with my fitness tracker! Seeing my health metrics and activity levels in one dashboard helps me stay on track with my wellness goals.",
      rating: 5,
      avatar: "💪"
    }
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const goToTestimonial = (index) => {
    setActiveTestimonial(index);
  };

  // Auto rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => clearInterval(interval);
  }, [activeTestimonial]);

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="section-header">
        <h2 className="section-title">WHAT OUR USERS SAY</h2>
        <p className="section-subtitle">
          Trusted by thousands of patients and healthcare professionals worldwide
        </p>
      </div>

      <div className="testimonials-container">
        <button 
          className="testimonial-nav-btn prev-btn" 
          onClick={prevTestimonial}
          aria-label="Previous testimonial"
        >
          ‹
        </button>

        <div className="testimonial-card">
          <div className="testimonial-header">
            <div className="testimonial-avatar">
              {testimonialsData[activeTestimonial].avatar}
            </div>
            <div className="testimonial-info">
              <h3>{testimonialsData[activeTestimonial].name}</h3>
              <p className="testimonial-role">{testimonialsData[activeTestimonial].role}</p>
            </div>
          </div>
          
          <div className="testimonial-content">
            <p className="testimonial-text">"{testimonialsData[activeTestimonial].content}"</p>
            <div className="testimonial-rating">
              {[...Array(5)].map((_, i) => (
                <span 
                  key={i} 
                  className={`star ${i < testimonialsData[activeTestimonial].rating ? 'filled' : ''}`}
                >
                  ★
                </span>
              ))}
              <span className="rating-text">
                {testimonialsData[activeTestimonial].rating}.0/5.0
              </span>
            </div>
          </div>
        </div>

        <button 
          className="testimonial-nav-btn next-btn" 
          onClick={nextTestimonial}
          aria-label="Next testimonial"
        >
          ›
        </button>
      </div>

      <div className="testimonial-dots">
        {testimonialsData.map((_, index) => (
          <button
            key={index}
            className={`testimonial-dot ${index === activeTestimonial ? 'active' : ''}`}
            onClick={() => goToTestimonial(index)}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>

      <div className="testimonial-stats">
        <div className="stat-item">
          <div className="stat-icon">👥</div>
          <div>
            <h3>50K+</h3>
            <p>Active Users</p>
          </div>
        </div>
        <div className="stat-item">
          <div className="stat-icon">⭐</div>
          <div>
            <h3>4.8 ★</h3>
            <p>App Store Rating</p>
          </div>
        </div>
        <div className="stat-item">
          <div className="stat-icon">😊</div>
          <div>
            <h3>98%</h3>
            <p>Satisfaction Rate</p>
          </div>
        </div>
        <div className="stat-item">
          <div className="stat-icon">⏰</div>
          <div>
            <h3>24/7</h3>
            <p>Support Available</p>
          </div>
        </div>
      </div>

      <div className="testimonial-cta">
        <p>Ready to experience better healthcare management?</p>
        <button className="btn-primary" onClick={() => {
          const downloadBtn = document.querySelector('.download-btn');
          if (downloadBtn) downloadBtn.click();
        }}>
          Join 50,000+ Happy Users
        </button>
      </div>
    </section>
  );
};

export default Testimonials;