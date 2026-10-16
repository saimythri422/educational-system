import React, { useState } from 'react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="navbar-header">
      <a href="#home" className="logo-link">
        <div className="logo">
          MYTHRI
          <span>EDUCATIONAL INSTITUTE</span>
        </div>
      </a>

      <button 
        className="mobile-toggle"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle navigation"
      >
        ☰
      </button>

      <nav className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
        <a href="#home" onClick={() => setMobileMenuOpen(false)}>Home</a>
        <a href="#courses" onClick={() => setMobileMenuOpen(false)}>Courses</a>
        <a href="#about" onClick={() => setMobileMenuOpen(false)}>About Us</a>
        <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Admissions</a>
        <a href="#contact" className="button nav-cta" onClick={() => setMobileMenuOpen(false)}>Apply Now</a>
      </nav>
    </header>
  );
}
