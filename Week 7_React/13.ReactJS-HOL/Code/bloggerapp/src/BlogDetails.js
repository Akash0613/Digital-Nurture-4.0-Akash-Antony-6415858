import React from 'react';

const BlogDetails = () => {
  return (
    <div className="details-container">
      <h2>Blog Details</h2>
      <div className="detail-item">
        <span className="detail-label">Blog Name:</span>
        <span className="detail-value">React Hooks Guide</span>
      </div>
      <div className="detail-item">
        <span className="detail-label">Author:</span>
        <span className="detail-value">Jane Smith</span>
      </div>
      <div className="detail-item">
        <span className="detail-label">Date:</span>
        <span className="detail-value">May 15, 2023</span>
      </div>
    </div>
  );
};

export default BlogDetails;