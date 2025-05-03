import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export function KitchenOrders() {
  const location = useLocation();
  const [orders, setOrders] = useState(new Map());

  // Load orders from state or localStorage on mount
  useEffect(() => {
    const initialOrders = location.state?.orders;
    if (initialOrders) {
      setOrders(new Map(initialOrders));
      localStorage.setItem("orders", JSON.stringify(Array.from(initialOrders.entries())));
    } else {
      const saved = JSON.parse(localStorage.getItem("orders"));
      if (saved) {
        setOrders(new Map(saved));
      }
    }
  }, [location.state]);

  // Delete an order by table number
  const deleteOrder = (tableNumberToDelete) => {
    const updatedOrders = new Map(orders);
    updatedOrders.delete(tableNumberToDelete);
    setOrders(updatedOrders);
    localStorage.setItem("orders", JSON.stringify(Array.from(updatedOrders.entries())));
  };

  return (
    <div>
      <h2>Kitchen Orders</h2>
      <Link to="/TableManagementLink" className="TableManagementLink">
        Go back
      </Link>

      {orders.size > 0 ? (
        <ul>
          {Array.from(orders.entries()).map(([tableNumber, data]) => (
            <li key={tableNumber}>
              <div>
                <strong>Table Number:</strong> {tableNumber}
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
                <strong>Notes:</strong> {data.notes}
              </div>
              <button onClick={() => deleteOrder(tableNumber)}>Order ready</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No orders available.</p>
      )}
    </div>
  );
}
