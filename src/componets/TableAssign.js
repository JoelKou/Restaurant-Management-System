import React, { useState } from "react";
import { useLocalStorage } from "../Hook/useLocalStorage";

export function TableAssign({ tableName = "Table 1" }) {

  const [status, setStatus] = useLocalStorage(`${tableName}_status`, 0);

  const [customerCount, setCustomerCount] = useLocalStorage(`${tableName}_customerCount`, 0);
  
  const [availableSeats, setAvailableSeats] = useLocalStorage(`${tableName}_availableSeats`, 4);

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












