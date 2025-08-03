import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <h1 className="app-title">Blogger App</h1>
      
      <div className="sections-container">
        {/* Course Details Section */}
        <div className="section">
          <h2>Course Details</h2>
          <div className="course-item">
            <h3>Angular</h3>
            <p>4/5/2021</p>
          </div>
          <div className="course-item">
            <h3>React</h3>
            <p>6/3/2021</p>
          </div>
        </div>

        {/* Book Details Section */}
        <div className="section">
          <h2>Book Details</h2>
          <ul className="book-list">
            <li>
              <strong>Master React</strong>
              <span>670</span>
            </li>
            <li>
              <strong>Deep Dive into Angular 11</strong>
              <span>800</span>
            </li>
            <li>
              <strong>Mongo Essentials</strong>
              <span>450</span>
            </li>
          </ul>
        </div>

        {/* Blog Details Section */}
        <div className="section">
          <h2>Blog Details</h2>
          <ul className="blog-list">
            <li>
              <strong>React Learning</strong>
            </li>
            <li>
              <strong>Stephen Biz</strong>
            </li>
            <li>Welcome to learning React!</li>
          </ul>
          <div className="installation">
            <h3>Installation</h3>
            <ul>
              <li>
                <strong>Schewzdenier</strong>
              </li>
              <li>You can install React from npm.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;