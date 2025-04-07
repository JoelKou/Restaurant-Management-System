import { Link } from "react-router-dom"


export function ChooseRole() {
    return (
        <>
        <h1>I am .. </h1>
        
        <div className="container">
        <Link to="/Manager" className="Manager" >  Manager </Link>  {/*  Navigates to the Manager page */}
    
        <Link to="/EmployeeScr" className="Employee" >  Employee </Link> {/*  Navigates to the Employee page */}
        </div>

        
        </>
    )
}

{/* Page to choose whether they are an employee or manager */}