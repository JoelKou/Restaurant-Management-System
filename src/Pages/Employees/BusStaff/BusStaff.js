import { Link } from "react-router-dom";

export function Busstaff() {
    return (
        <div className="left-aligned-links">

            <Link to="/TableManagementLink" className="TableManagementLink">
                Assign Customer to Table
            </Link>

            <Link to="/EmployeeScr" className="Employee">
                Go back
            </Link>
        </div>
    );
}
