import React from 'react';

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <small className="hero-badge">WELCOME TO MYTHRI EDUCATIONAL INSTITUTE</small>
        <h1>
          Learn Today.<br />
          <span>Lead Tomorrow.</span>
        </h1>
        <p>
          Explore educational opportunities, develop cutting-edge skills,
          and prepare for your future with Mythri Educational Institute.
          Discover courses tailored to match your academic and career goals.
        </p>
        <div className="hero-actions">
          <a href="#courses" className="button">
            Explore Courses →
          </a>
          <a href="#contact" className="button button-outline">
            Admissions Open
          </a>
        </div>
      </div>

      <div className="hero-art-container">
        <div className="hero-art" role="img" aria-label="Graduation Cap">
          🎓
        </div>
      </div>
    </section>
  );
}
