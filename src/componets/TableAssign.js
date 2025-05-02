
import React, { useState } from "react";
import { useLocalStorage } from "../Hook/useLocalStorage";

export function TableAssign({ tableName = "Table 1" }) {

  // Retrieve and set table's status and saves it (when navigating back and forth)
  const [status, setStatus] = useLocalStorage(`${tableName}_status`, 0);

  // Retrieve and set the current customer count and saves it for the table (when navigating back and forth)
  const [customerCount, setCustomerCount] = useLocalStorage(`${tableName}_customerCount`, 0);
  
  // Retrieve and set the available seats at the table (when navigating back and forth)
  const [availableSeats, setAvailableSeats] = useLocalStorage(`${tableName}_availableSeats`, 4);

  // Different statuses
  const buttonStates = [
    { status: "Available", className: "available" },
    { status: "Occupied", className: "occupied" },
    { status: "Busy", className: "busy" },
  ];

  // Handles cycling through the table status on button click
  const handleStatusClick = () => {
    setStatus((status + 1) % buttonStates.length);
  };

  // Increase the customer count, if there are still available seats
  const incrCount = () => {
    if (customerCount < availableSeats) {
      setCustomerCount(customerCount + 1);
    }
  };

  // Decrease the customer count, ensuring it doesn't go below zero
  const decrCount = () => {
    if (customerCount > 0) {
      setCustomerCount(customerCount - 1);
    }
  };

  // Get the current status button's state (Available, Occupied, Busy)
  const currentButtonState = buttonStates[status];

  return (
    <div>
      
      <button onClick={handleStatusClick} className={currentButtonState.className}>
        <h1>{tableName}</h1>
        {currentButtonState.status}
      </button>

      
      <div>
        <p>Customers at table: {customerCount}</p>
        <button onClick={incrCount}>Increase</button>
        <button onClick={decrCount}>Decrease</button>
      </div>

     
      <div>
        <p>Available Seats: {availableSeats - customerCount}</p>
      </div>
    </div>
  );
}






