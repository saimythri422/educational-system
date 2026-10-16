import React from 'react';

export default function CourseCard({ course, onSelectCourse }) {
  return (
    <article className="course-card">
      <div className="course-image">{course.emoji || '📚'}</div>
      <div className="course-info">
        <span className="course-category">{course.category}</span>
        <h3>{course.name}</h3>
        <p>{course.description}</p>
        <div className="course-meta">
          {course.duration && <span className="meta-badge">⏳ {course.duration}</span>}
          {course.fee && <span className="meta-badge">💰 ₹{Number(course.fee).toLocaleString()}</span>}
        </div>
        <a
          href="#contact"
          className="button course-btn"
          onClick={() => onSelectCourse(course.name)}
        >
          Enquire Now
        </a>
      </div>
    </article>
  );
}
