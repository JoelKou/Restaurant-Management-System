import { Link } from "react-router-dom";

export function WaitStaff() {
    return (
        <div className="left-aligned-links">
            <Link to="/TableManagementLink" className="TableManagementLink"> Wait Menu </Link>
            <Link to="/EmployeeScr" className="Employee"> Go back </Link>
        </div>
    );
}
