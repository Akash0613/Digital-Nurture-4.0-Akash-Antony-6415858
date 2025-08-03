import React from 'react';
import './App.css';
// import officeImage from './office.jpg'; // You'll need to add an image file

function App() {
    const office = {
    name: "DBS",
    rent: 50000,
    address: "Chennai",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    };

  return (
    <div className="app">
      <h1>Office Space, at Affordable Range</h1>
      
      <div className="office-container">
        <img src={office.image} alt="Office Space" className="office-image" />
        
        <div className="office-details">
          <p><strong>Name:</strong> {office.name}</p>
          <p><strong>Rent:</strong> <span className="rent">Rs. {office.rent}</span></p>
          <p><strong>Address:</strong> {office.address}</p>
        </div>
      </div>
    </div>
  );
}

export default App;