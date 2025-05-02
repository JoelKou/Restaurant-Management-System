import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMapLocalStorage } from "../../Hook/useMapLocalStorage";
import { Link

 } from 'react-router-dom';
export function EmployeeScr() {
    const [employeeMap] = useMapLocalStorage("employeeMap", new Map());
    const [selectedID, setSelectedID] = useState('');
    const [pin, setPin] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        const employee = employeeMap.get(selectedID);

        if (!employee) {
            alert("Select a valid employee.");
            return;
        }

        if (employee.pin !== pin) {
            alert("Incorrect PIN.");
            return;
        }

        // Navigate based on role
        switch (employee.role) {
            case "Host":
                navigate("/Host");
                break;
            case "Wait Staff":
                navigate("/WaitStaff");
                break;
            case "Bus Staff":
                navigate("/BusStaff");
                break;
            case "Kitchen":
                navigate("/Kitchen");
                break;
            default:
                alert("Role not recognized.");
        }
    };

    return (
        <>
            <h1 className="EmText">Employee Login</h1>
            <div className="container">
 
                <select
                    value={selectedID}
                    onChange={(e) => setSelectedID(e.target.value)}
                >
                    <option value="">Select Employee</option>
                    {Array.from(employeeMap.entries()).map(([id, data]) => (
                        <option key={id} value={id}>
                            {data.name} ({data.role})
                        </option>
                    ))}
                </select>

                <input
                    type="password"
                    placeholder="Enter PIN"
                    value={pin}
                    onChange={(e) => setPin(e.target.value)}
                />

                <button onClick={handleLogin}>Login</button>

                <Link to="/" className="/Host" > Go back </Link> {/*  Navigates to the Employee page */}
            </div>
        </>
    );
}
