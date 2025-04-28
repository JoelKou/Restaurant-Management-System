import React, { useState } from 'react';

export function TakeOrder () {
    // State to store orders with a Map
    const [OrderMap, setOrderMap] = useState(new Map());
    const [tableNumber, setTableNumber] = useState('');
    const [orderDetails, setOrderDetails] = useState([]);
    const [notes, setNotes] = useState('');
  
    // Menu items
    const menuItems = [
      'Burger',
      'Wings',
      'Fries',
      'Onion Rings',
      'Jalapeño Poppers',
      'Artichoke Dip',
      'Brownie Sundae',
      'Tiramisu',
      'Soft Drink',
      'Beer',
    ];
  
    // Function to handle adding menu item to the order
    const handleAddItem = (item) => {
      const newOrderDetails = [...orderDetails];
      const itemIndex = newOrderDetails.findIndex((orderItem) => orderItem.name === item);
  
      if (itemIndex !== -1) {
        newOrderDetails[itemIndex].quantity += 1;
      } else {
        newOrderDetails.push({ name: item, quantity: 1 });
      }
      setOrderDetails(newOrderDetails);
      const newMap = new Map(OrderMap);
      newMap.set(tableNumber, {
        orderDetails: newOrderDetails,
        notes: notes,
      });
      setOrderMap(newMap);
    };
  
    // Function to handle order submission
    const handleSubmit = () => {
      if (tableNumber && orderDetails.length > 0 && notes) {
        const newMap = new Map(OrderMap);
        newMap.set(tableNumber, {
          orderDetails: orderDetails,
          notes: notes,
        });
        setOrderMap(newMap);
        setTableNumber('');
        setOrderDetails([]);
        setNotes('');
      }
    };
  
    // Function to delete an order
    const handleDelete = (tableToDelete) => {
      const newMap = new Map(OrderMap);
      newMap.delete(tableToDelete);
      setOrderMap(newMap);
    };
  
    // Function to handle editing order fields
    const handleEditOrder = (oldTableNumber, newTableNumber, newNotes) => {
      const newMap = new Map(OrderMap);
      const order = newMap.get(oldTableNumber);
      newMap.delete(oldTableNumber);
      newMap.set(newTableNumber, {
        orderDetails: order.orderDetails,
        notes: newNotes,
      });
      setOrderMap(newMap);
    };
  
    return (
      <div>
        <h2>Manage Orders</h2>
        <input
          type="text"
          placeholder="Table Number"
          value={tableNumber}
          onChange={(e) => setTableNumber(e.target.value)}
        />
        <input
          type="text"
          placeholder="Notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
        <button onClick={handleSubmit}>Confirm Order</button>
  
        <div>
          <h3>Menu</h3>
          <ul>
            {menuItems.map((item) => (
              <li key={item}>
                <button onClick={() => handleAddItem(item)}>{item}</button>
              </li>
            ))}
          </ul>
        </div>
  
        <div>
          <h3>Current Orders</h3>
          <ul>
            {Array.from(OrderMap.entries()).map(([tableNumber, data]) => (
              <li key={tableNumber}>
                <div>
                  <strong>Table Number:</strong>
                  <input
                    type="text"
                    defaultValue={tableNumber}
                    onBlur={(e) => handleEditOrder(tableNumber, e.target.value, data.notes)}
                  />
                </div>
                <div>
                  <strong>Order Details:</strong>
                  <ul>
                    {data.orderDetails.map((item, index) => (
                      <li key={index}>
                        {item.name} (x{item.quantity})
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <strong>Notes:</strong>
                  <input
                    type="text"
                    defaultValue={data.notes}
                    onBlur={(e) => handleEditOrder(tableNumber, tableNumber, e.target.value)}
                  />
                </div>
                <button onClick={() => handleDelete(tableNumber)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
  

  