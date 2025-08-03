import React from 'react';

function GuestPage() {
  return (
    <div>
      <h2>Welcome Guest!</h2>
      <h3>Available Flights</h3>
      <ul>
        <li>Flight 101: New York to London - $499</li>
        <li>Flight 202: Paris to Tokyo - $899</li>
        <li>Flight 303: Sydney to Los Angeles - $799</li>
      </ul>
      <p>Please login to book tickets.</p>
    </div>
  );
}

export default GuestPage;