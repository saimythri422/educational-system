import React from 'react';

export default function About() {
  const highlights = [
    {
      icon: "📚",
      title: "Diverse Programs",
      description: "Explore subjects across technical, academic, commerce, and scientific fields."
    },
    {
      icon: "💻",
      title: "Hands-on Skill Development",
      description: "Build practical knowledge with modern full-stack tools, labs, and interactive curriculum."
    },
    {
      icon: "🎯",
      title: "Goal-Oriented Mentorship",
      description: "Choose a learning path supported by experienced faculty and dedicated mentors."
    }
  ];

  return (
    <section className="section about" id="about">
      <div className="about-content">
        <h2>About Mythri Educational Institute</h2>
        <p>
          Mythri Educational Institute is committed to empowering students with
          quality education, practical skills, and values. We foster intellectual
          curiosity and technical excellence to prepare students for successful careers.
        </p>
        <p>
          Our campus provides state-of-the-art facilities, expert faculty guidance,
          and a supportive learning ecosystem designed to help every student thrive.
        </p>

        <div className="why-grid">
          {highlights.map((item, idx) => (
            <div key={idx} className="why-card">
              <span className="why-icon">{item.icon}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
