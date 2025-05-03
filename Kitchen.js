import { Link } from "react-router-dom";

export function Kitchen() {
    return (
        <div className="left-aligned-links">
            <h1>This is Kitchen </h1>
            <Link to="/KitchenOrders" className="KitchenOrders"> Kitchen Orders </Link> 
            <Link to="/EmployeeScr" className="Employee"> Go back </Link>
        </div>
    );
}
