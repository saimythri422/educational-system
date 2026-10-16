import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import CourseList from './components/CourseList';
import About from './components/About';
import EnquiryForm from './components/EnquiryForm';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  const [selectedCourse, setSelectedCourse] = useState('');

  const handleSelectCourse = (courseName) => {
    setSelectedCourse(courseName);
  };

  const handleResetCourse = () => {
    setSelectedCourse('');
  };

  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <CourseList onSelectCourse={handleSelectCourse} />
        <About />
        <EnquiryForm
          selectedCourse={selectedCourse}
          onResetSelectedCourse={handleResetCourse}
        />
      </main>
      <Footer />
    </div>
  );
}
