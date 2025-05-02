import { Link } from "react-router-dom";

export function Host() {
    return (
        <div className="left-aligned-links">
            <Link to="/HostMenu" className="HostMenu"> Host Menu </Link>
            <Link to="/EmployeeScr" className="Employee"> Go back </Link>
        </div>
    );
}
