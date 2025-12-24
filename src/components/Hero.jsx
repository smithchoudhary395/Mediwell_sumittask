const Hero = () => {
    return (
      <section className="hero">
        <div className="hero-left">
          <h1>Your Health Dashboard</h1>
          <p>
            Manage prescriptions, track medications, and access your medical
            records all in one place.
          </p>
  
          <div className="badges">
            <span>🔒 Data Protection</span>
            <span>📱 Mobile First</span>
            <span>⏰ 24/7 Access</span>
          </div>
        </div>
  
        <div className="hero-right">
          <div className="card">Medication Reminders</div>
          <div className="card">Appointment Booking</div>
          <div className="card">Doctor Connect</div>
        </div>
      </section>
    );
  };
  
  export default Hero;
  