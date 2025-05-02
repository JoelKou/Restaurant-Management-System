import React, { useState } from 'react'; // Import React and useState hook
import { useNavigate } from 'react-router-dom'; // Import useNavigate for page navigation

export function TakeOrder() {
    const [OrderMap, setOrderMap] = useState(new Map()); // Store orders in a Map
    const [tableNumber, setTableNumber] = useState(''); // Store current table number
    const [orderDetails, setOrderDetails] = useState([]); // Store items in the current order
    const [notes, setNotes] = useState(''); // Store any notes for the order
    
    const navigate = useNavigate();  // Hook for page navigation

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

    // Function to handle adding an item to the order
    const handleAddItem = (item) => {
        const newOrderDetails = [...orderDetails];
        const itemIndex = newOrderDetails.findIndex((orderItem) => orderItem.name === item);

        if (itemIndex !== -1) {
            newOrderDetails[itemIndex].quantity += 1; // Increment quantity if item exists
        } else {
            newOrderDetails.push({ name: item, quantity: 1 }); // Add new item if it doesn't exist
        }
        setOrderDetails(newOrderDetails);

        // Update the OrderMap with new order details for the current table
        const newMap = new Map(OrderMap);
        newMap.set(tableNumber, {
            orderDetails: newOrderDetails,
            notes: notes,
        });
        setOrderMap(newMap);
    };

    // Function to submit the order
    const handleSubmit = () => {
      if (tableNumber && orderDetails.length > 0 && notes) {
          const newMap = new Map(OrderMap);
          newMap.set(tableNumber, {
              orderDetails: orderDetails,
              notes: notes,
          });
          setOrderMap(newMap);
          
          console.log("Submitting order:", newMap); // Log the submitted order
  
          setTableNumber('');
          setOrderDetails([]);
          setNotes('');
  
           // Navigate to the Kitchen Orders page with the updated orders state
          navigate('/KitchenOrders', { state: { orders: newMap } });
      }
  };

    // Function to delete an order for a given table
    const handleDelete = (tableToDelete) => {
        const newMap = new Map(OrderMap);
        newMap.delete(tableToDelete); // Remove the table's order from the map
        setOrderMap(newMap); // Update the state with the new map
    };

    // Function to edit an existing order for a given table
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

    // Function to handle table number change
    const handleTableChange = (e) => {
        const newTableNumber = e.target.value;
        setTableNumber(newTableNumber);

        // If the table number doesn't exist in the map, reset the order details
        if (!OrderMap.has(newTableNumber)) {
            setOrderDetails([]);
            setNotes('');
        }
    };

    return (
        <div>
            <h2>Manage Orders</h2>
            <input
                type="text"
                placeholder="Table Number"
                value={tableNumber}
                onChange={handleTableChange}
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
