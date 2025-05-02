import { useState } from "react";
import { Link } from "react-router-dom";

export function Manager() {
    const [enteredPin, setEnteredPin] = useState("");
    const [isVerified, setIsVerified] = useState(false);
    const correctPin = "1234"; // Replace with your desired PIN

    const handlePinSubmit = () => {
        if (enteredPin === correctPin) {
            setIsVerified(true);
        } else {
            alert("Incorrect PIN");
        }
    };

    if (!isVerified) {
        return (
            <div>
                <h2>Enter PIN to access Manager Page</h2>
                <input
                    type="password"
                    inputMode="numeric"
                    pattern="\d*"
                    maxLength={6}
                    value={enteredPin}
                    onChange={(e) => setEnteredPin(e.target.value)}
                    placeholder="Enter PIN"
                />
                <button onClick={handlePinSubmit}>Submit</button>
            </div>
        );
    }

    return (
        <>
            <h1>This is Manager</h1>
            <Link to="/CreateProfile" className="CreateProfile">Create Profile</Link>
            <Link to="/" className="ChooseRole">Go back</Link>
        </>
    );
}
 