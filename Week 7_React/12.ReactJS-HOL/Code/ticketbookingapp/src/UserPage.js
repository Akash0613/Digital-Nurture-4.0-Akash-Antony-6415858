import React from 'react';

function UserPage() {
  return (
    <div>
      <h2>Welcome User!</h2>
      <h3>Book Your Flight</h3>
      <form>
        <div>
          <label>Flight Number:</label>
          <select>
            <option>Flight 101: New York to London</option>
            <option>Flight 202: Paris to Tokyo</option>
            <option>Flight 303: Sydney to Los Angeles</option>
          </select>
        </div>
        <div>
          <label>Passenger Name:</label>
          <input type="text" />
        </div>
        <div>
          <label>Date:</label>
          <input type="date" />
        </div>
        <button type="submit">Book Ticket</button>
      </form>
    </div>
  );
}

export default UserPage;