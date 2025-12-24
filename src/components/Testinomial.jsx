import { useState } from 'react';

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonialsData = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Patient with Diabetes",
      content: "Mediwell has completely transformed how I manage my diabetes. The medication reminders are a lifesaver!",
      rating: 5,
      avatar: "👩‍⚕️"
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      role: "Cardiologist",
      content: "As a healthcare provider, I recommend Mediwell to all my patients. It streamlines communication and care.",
      rating: 5,
      avatar: "👨‍⚕️"
    },
    {
      id: 3,
      name: "Robert Garcia",
      role: "Senior User",
      content: "The interface is so intuitive even for someone like me who's not tech-savvy. My family loves it too!",
      rating: 4,
      avatar: "👴"
    },
    {
      id: 4,
      name: "Lisa Wang",
      role: "Busy Professional",
      content: "24/7 access to my medical records and easy appointment booking saves me hours every month.",
      rating: 5,
      avatar: "👩‍💼"
    }
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="section-header">
        <h2 className="section-title">WHAT OUR USERS SAY</h2>
        <p className="section-subtitle">
          Trusted by thousands of patients and healthcare professionals worldwide
        </p>
      </div>

      <div className="testimonials-container">
        <button className="testimonial-nav-btn prev-btn" onClick={prevTestimonial}>
          ‹
        </button>

        <div className="testimonial-card">
          <div className="testimonial-avatar">
            {testimonialsData[activeTestimonial].avatar}
          </div>
          <div className="testimonial-content">
            <p className="testimonial-text">"{testimonialsData[activeTestimonial].content}"</p>
            <div className="testimonial-rating">
              {[...Array(5)].map((_, i) => (
                <span key={i} className={i < testimonialsData[activeTestimonial].rating ? 'star filled' : 'star'}>
                  ★
                </span>
              ))}
            </div>
            <div className="testimonial-author">
              <h4>{testimonialsData[activeTestimonial].name}</h4>
              <p>{testimonialsData[activeTestimonial].role}</p>
            </div>
          </div>
        </div>

        <button className="testimonial-nav-btn next-btn" onClick={nextTestimonial}>
          ›
        </button>
      </div>

      <div className="testimonial-dots">
        {testimonialsData.map((_, index) => (
          <button
            key={index}
            className={`testimonial-dot ${index === activeTestimonial ? 'active' : ''}`}
            onClick={() => setActiveTestimonial(index)}
          />
        ))}
      </div>

      <div className="testimonial-stats">
        <div className="stat-item">
          <h3>50K+</h3>
          <p>Active Users</p>
        </div>
        <div className="stat-item">
          <h3>4.8 ★</h3>
          <p>App Store Rating</p>
        </div>
        <div className="stat-item">
          <h3>98%</h3>
          <p>Satisfaction Rate</p>
        </div>
        <div className="stat-item">
          <h3>24/7</h3>
          <p>Support Available</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;