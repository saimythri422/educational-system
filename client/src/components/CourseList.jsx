import React, { useState, useEffect } from 'react';
import CourseCard from './CourseCard';

const INITIAL_COURSES = [
  {
    id: 1,
    name: "B.Tech Engineering",
    category: "Engineering",
    description: "Explore engineering disciplines, software development, and technical concepts.",
    duration: "4 Years",
    fee: 95000,
    emoji: "⚙️"
  },
  {
    id: 2,
    name: "Computer Science",
    category: "Computer",
    description: "Learn programming languages, data structures, algorithms, and software fundamentals.",
    duration: "3 Years",
    fee: 85000,
    emoji: "💻"
  },
  {
    id: 3,
    name: "B.Sc Science",
    category: "Science",
    description: "Explore core scientific concepts, laboratory work, and subject fundamentals.",
    duration: "3 Years",
    fee: 60000,
    emoji: "🔬"
  },
  {
    id: 4,
    name: "B.Com Commerce",
    category: "Commerce",
    description: "Explore accounting, financial management, business analytics, and commerce subjects.",
    duration: "3 Years",
    fee: 55000,
    emoji: "📊"
  },
  {
    id: 5,
    name: "Computer Applications",
    category: "Computer",
    description: "Build hands-on knowledge of computer applications, database design, and IT tools.",
    duration: "3 Years",
    fee: 70000,
    emoji: "🖥️"
  },
  {
    id: 6,
    name: "Electronics & Communication",
    category: "Engineering",
    description: "Explore electronic systems, microprocessors, signal processing, and communication technology.",
    duration: "4 Years",
    fee: 90000,
    emoji: "📡"
  }
];

const CATEGORIES = ["All", "Engineering", "Science", "Commerce", "Computer"];

export default function CourseList({ onSelectCourse }) {
  const [courses, setCourses] = useState(INITIAL_COURSES);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [apiStatus, setApiStatus] = useState("checking");

  useEffect(() => {
    fetch('/api/courses')
      .then(res => res.json())
      .then(data => {
        if (data.success && data.data && data.data.length > 0) {
          setCourses(data.data);
          setApiStatus('connected');
        }
      })
      .catch(() => {
        setApiStatus('offline');
      });
  }, []);

  const filteredCourses = courses.filter(course => {
    const matchesCategory =
      activeCategory === "All" || course.category === activeCategory;

    const query = searchTerm.toLowerCase().trim();
    const matchesSearch =
      !query ||
      course.name.toLowerCase().includes(query) ||
      course.category.toLowerCase().includes(query) ||
      (course.description && course.description.toLowerCase().includes(query));

    return matchesCategory && matchesSearch;
  });

  return (
    <section className="section" id="courses">
      <div className="section-heading">
        <h2>Explore Our Courses</h2>
        <p>Choose a program that supports your educational ambitions.</p>
        {apiStatus === 'connected' && (
          <span className="api-badge connected">🟢 Live Data from Express API & MySQL</span>
        )}
      </div>

      <div className="toolbar">
        <div className="filters">
          {CATEGORIES.map(category => (
            <button
              key={category}
              className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category === "All" ? "All Courses" : category}
            </button>
          ))}
        </div>

        <input
          type="search"
          id="search"
          placeholder="Search courses..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          aria-label="Search courses"
        />
      </div>

      <div className="courses-grid">
        {filteredCourses.length > 0 ? (
          filteredCourses.map(course => (
            <CourseCard
              key={course.id}
              course={course}
              onSelectCourse={onSelectCourse}
            />
          ))
        ) : (
          <p className="no-results">No matching courses found. Try a different search.</p>
        )}
      </div>
    </section>
  );
}
