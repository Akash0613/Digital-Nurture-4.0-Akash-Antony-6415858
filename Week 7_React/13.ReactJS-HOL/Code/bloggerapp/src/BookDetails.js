import React from 'react';

const BookDetails = () => {
  return (
    <div className="details-container">
      <h2>Book Details</h2>
      <div className="detail-item">
        <span className="detail-label">Book Name:</span>
        <span className="detail-value">React for Beginners</span>
      </div>
      <div className="detail-item">
        <span className="detail-label">Author:</span>
        <span className="detail-value">John Doe</span>
      </div>
      <div className="detail-item">
        <span className="detail-label">Year:</span>
        <span className="detail-value">2023</span>
      </div>
    </div>
  );
};

export default BookDetails;