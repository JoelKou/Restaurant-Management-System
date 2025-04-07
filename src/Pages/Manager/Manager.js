import { Link } from "react-router-dom";

export function Manager() {
    return (
        <>
        <h1> This is Manager</h1>
        <Link to="/CreateProfile" className = "CreateProfile">Create Profile</Link>
        </>
    )
}

{/* Manager screen */}