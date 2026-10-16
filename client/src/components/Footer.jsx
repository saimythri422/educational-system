import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <h2>MYTHRI EDUCATIONAL INSTITUTE</h2>
        <p className="footer-tagline">Learn Today. Lead Tomorrow.</p>
        <p className="footer-sub">Explore courses. Discover opportunities. Build your future.</p>
        
        <div className="footer-meta">
          <div className="tech-stack-badges">
            <span className="badge">HTML5</span>
            <span className="badge">CSS3</span>
            <span className="badge">JavaScript</span>
            <span className="badge">React.js</span>
            <span className="badge">Node.js</span>
            <span className="badge">Express.js</span>
            <span className="badge">MySQL</span>
          </div>
          <p className="copyright">
            © {currentYear} Mythri Educational Institute. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
