const Hero = () => {
  const scrollToFeatures = () => {
    document.getElementById('features')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <section className="hero" id="home">
      <div className="hero-left">
        <h1>Your Health Dashboard</h1>
        <p>
          Manage prescriptions, track medications, and access your medical
          records all in one place. Secure, reliable, and designed for you.
        </p>
        
        <button className="btn-primary hero-cta" onClick={scrollToFeatures}>
          Explore Features
        </button>

        <div className="badges">
          <span className="badge">🔒 Data Protection</span>
          <span className="badge">📱 Mobile First</span>
          <span className="badge">⏰ 24/7 Access</span>
        </div>
      </div>

      <div className="hero-right">
        <div className="hero-cards">
          <div className="card card-1">
            <div className="card-icon">💊</div>
            <h3>Medication Reminders</h3>
            <p>Never miss a dose with smart alerts</p>
          </div>
          <div className="card card-2">
            <div className="card-icon">📅</div>
            <h3>Appointment Booking</h3>
            <p>Schedule doctor visits instantly</p>
          </div>
          <div className="card card-3">
            <div className="card-icon">👨‍⚕️</div>
            <h3>Doctor Connect</h3>
            <p>Video consultations made easy</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;