import React from 'react';

const CourseDetails = () => {
  return (
    <div className="details-container">
      <h2>Course Details</h2>
      <div className="detail-item">
        <span className="detail-label">Course Name:</span>
        <span className="detail-value">Advanced React</span>
      </div>
      <div className="detail-item">
        <span className="detail-label">Instructor:</span>
        <span className="detail-value">Mike Johnson</span>
      </div>
      <div className="detail-item">
        <span className="detail-label">Duration:</span>
        <span className="detail-value">8 weeks</span>
      </div>
    </div>
  );
};

export default CourseDetails;