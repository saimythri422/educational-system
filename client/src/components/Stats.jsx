import React from 'react';

export default function Stats() {
  const statsData = [
    { number: '06+', label: 'Course Options' },
    { number: '01', label: 'Learning Destination' },
    { number: '100%', label: 'Focus on Learning' },
    { number: '500+', label: 'Happy Students' }
  ];

  return (
    <section className="stats">
      {statsData.map((item, idx) => (
        <div key={idx} className="stat-item">
          <strong>{item.number}</strong>
          <span>{item.label}</span>
        </div>
      ))}
    </section>
  );
}
