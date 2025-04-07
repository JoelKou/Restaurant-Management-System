import React, { useState } from "react";

export function TableAssign({ tableName = "Table 1" }) {

// Keeps track of whether the table is Available, Occupied, or Busy
  const [status, setStatus] = useState(0);

  // How many people are currently sitting at the table
  const [customerCount, setCustomerCount] = useState(0);

  //Max Number of seats at table
  const [availableSeats, setAvailableSeats] = useState(4);

  //Different status in the table
  const buttonStates = [
    { status: "Available", className: "available" },
    { status: "Occupied", className: "occupied" },
    { status: "Busy", className: "busy" },
  ];

  // Handles cycling through status
  const handleStatusClick = () => {
    setStatus((status + 1) % buttonStates.length);
  };

  const incrCount = () => {
    if (customerCount < availableSeats) {
      setCustomerCount(customerCount + 1);
    }
  };

  const decrCount = () => {
    if (customerCount > 0) {
      setCustomerCount(customerCount - 1);
    }
  };

 // Get the current status info
  const currentButtonState = buttonStates[status];



  return (
    
    <div>
      {/* Handles click through table status */}
      <button onClick={handleStatusClick} className={currentButtonState.className}>
        <h1>{tableName}</h1>
        {currentButtonState.status}
      </button>

  {/* Let the host add or subtract customer */}
      <div>
        <p>Customers at table: {customerCount}</p>
        <button onClick={incrCount}>Increase</button>
        <button onClick={decrCount}>Decrease</button>
      </div>

  {/* Let the host know how many seats are still open */}
      <div>
        <p>Available Seats: {availableSeats - customerCount}</p>
      </div>
    </div>
  );
}












