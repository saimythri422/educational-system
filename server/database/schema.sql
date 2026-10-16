-- ==========================================================
-- Mythri Educational Institute Database Schema
-- Technology: MySQL
-- ==========================================================

CREATE DATABASE IF NOT EXISTS educational_system;
USE educational_system;

-- 1. Courses Table
CREATE TABLE IF NOT EXISTS courses (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    category VARCHAR(100) NOT NULL,
    description TEXT NOT NULL,
    duration VARCHAR(50) DEFAULT '4 Years',
    fee DECIMAL(10, 2) DEFAULT 75000.00,
    emoji VARCHAR(20) DEFAULT '📚',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 2. Enquiries Table (Admissions / Course Enquiry)
CREATE TABLE IF NOT EXISTS enquiries (
    id INT AUTO_INCREMENT PRIMARY KEY,
    student_name VARCHAR(150) NOT NULL,
    email VARCHAR(150) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    course_name VARCHAR(255) NOT NULL,
    message TEXT,
    status ENUM('Pending', 'Contacted', 'Enrolled', 'Closed') DEFAULT 'Pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 3. Students Table (Enrolled Students)
CREATE TABLE IF NOT EXISTS students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(150) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    phone VARCHAR(20) NOT NULL,
    enrolled_course VARCHAR(255) NOT NULL,
    admission_date DATE DEFAULT (CURRENT_DATE),
    status ENUM('Active', 'Graduated', 'Suspended') DEFAULT 'Active',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ==========================================================
-- Seed Data for Courses
-- ==========================================================
INSERT INTO courses (name, category, description, duration, fee, emoji) VALUES
('B.Tech Engineering', 'Engineering', 'Explore engineering disciplines, software development, and technical concepts.', '4 Years', 95000.00, '⚙️'),
('Computer Science', 'Computer', 'Learn programming languages, data structures, algorithms, and software fundamentals.', '3 Years', 85000.00, '💻'),
('B.Sc Science', 'Science', 'Explore core scientific concepts, laboratory work, and subject fundamentals.', '3 Years', 60000.00, '🔬'),
('B.Com Commerce', 'Commerce', 'Explore accounting, financial management, business analytics, and commerce subjects.', '3 Years', 55000.00, '📊'),
('Computer Applications', 'Computer', 'Build hands-on knowledge of computer applications, database design, and IT tools.', '3 Years', 70000.00, '🖥️'),
('Electronics & Communication', 'Engineering', 'Explore electronic systems, microprocessors, signal processing, and communication technology.', '4 Years', 90000.00, '📡');

-- Sample Enquiries
INSERT INTO enquiries (student_name, email, phone, course_name, message, status) VALUES
('Rahul Sharma', 'rahul@example.com', '9876543210', 'Computer Science', 'Interested in admissions for the upcoming batch.', 'Contacted'),
('Priya Patel', 'priya@example.com', '9876543211', 'B.Tech Engineering', 'Requesting details about the course syllabus and fees.', 'Pending');
