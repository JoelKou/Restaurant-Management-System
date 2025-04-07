import { Link } from "react-router-dom";

export function EmployeeScr() {
    return (
        <>
            <h1 className="EmText"> Employee Screen </h1>
            <div className="container">
                <Link to="/Host" className="Host"> Host </Link>
                <Link to="/WaitStaff" className="WaitStaff"> Wait Staff </Link>
                <Link to="/BusStaff" className="BusStaff"> Bus Staff </Link>
                <Link to="/Kitchen" className="Kitchen"> Kitchen </Link>
            </div>
        </>
    );
}