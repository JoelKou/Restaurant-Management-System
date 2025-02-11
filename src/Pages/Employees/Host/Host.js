import { Link } from "react-router-dom";

export function Host() {
    return (
        <>
        <h1> This is Host page </h1>
        <Link to="/HostMenu" className="HostMenu"> Host Menu </Link> {/*  Navigates to the Host Menu page */}
        </>
    )
}

{/*Host Page */}