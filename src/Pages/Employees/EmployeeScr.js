import { Link } from "react-router-dom"

export function EmployeeScr() {
    return (
        <>
        <h1 className="EmText"> Employee Screen </h1>
        <Link to="/Host" className="Host" >  Host </Link> {/*  Navigates to the Host page */}
        <Link to="/WaitStaff" className="WaitStaff" >  Wait Staff </Link> {/*  Navigates to the Wait Staff page */}
        <Link to="/BusStaff" className="BusStaff" >  Bus Staff </Link> {/*  Navigates to the Bus Staff page */}
        <Link to="/Kitchen" className="Kitchen" >  Kitchen </Link> {/*  Navigates to the Kitchen page */}
        
        </>
    )
}

{/* Employee selection screen */}