import { Link } from "react-router-dom";
import React, { useState } from 'react';
import { useMapLocalStorage } from "../../Hook/useMapLocalStorage";
import { useLocalStorage } from "../../Hook/useLocalStorage";

export function CreateProfile() {
  const [employeeMap, setEmployeeMap] = useMapLocalStorage("employeeMap", new Map());
  const [employeeName, setEmployeeName] = useState('');
  const [employeeID, setEmployeeID] = useState('');
  const [employeeRole, setEmployeeRole] = useState('');
  const [employeePin, setEmployeePin] = useState('');
  const [pin, setPin] = useState('');
  const [savedPin, setSavedPin] = useLocalStorage("managerPin", "");

  const handleSubmit = () => {
    if (employeeName && employeeID && employeeRole && employeePin) {
      const copyMap = new Map(employeeMap);
      copyMap.set(employeeID, {
        name: employeeName,
        role: employeeRole,
        pin: employeePin,
      });
      setEmployeeMap(copyMap);
      setEmployeeName('');
      setEmployeeID('');
      setEmployeeRole('');
      setEmployeePin('');
    } else {
      alert("Please fill in all fields.");
    }
  };

  const handleDelete = (id) => {
    const tempMap = new Map(employeeMap);
    tempMap.delete(id);
    setEmployeeMap(tempMap);
  };

  return (
    <div>
      <h2>Add Employee</h2>

      <input
        type="text"
        placeholder="Employee Name"
        value={employeeName}
        onChange={(e) => setEmployeeName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Employee ID"
        value={employeeID}
        onChange={(e) => setEmployeeID(e.target.value)}
      />

      <select
        value={employeeRole}
        onChange={(e) => setEmployeeRole(e.target.value)}
      >
        <option value="">Select Role</option>
        <option value="Wait Staff">Wait Staff</option>
        <option value="Kitchen">Kitchen</option>
        <option value="Host">Host</option>
        <option value="Bus Staff">Bus Staff</option>
      </select>

      <input
        type="text"
        placeholder="PIN"
        value={employeePin}
        onChange={(e) => setEmployeePin(e.target.value)}
      />

      <button onClick={handleSubmit}>Add Employee</button>

      <div>
        <h3>Employee List</h3>
        {Array.from(employeeMap.entries()).map(([id, data]) => (
          <div key={id}>
            <p><strong>ID:</strong> {id}</p>
            <p><strong>Name:</strong> {data.name}</p>
            <p><strong>Role:</strong> {data.role}</p>
            <p><strong>PIN:</strong> {data.pin}</p>
            <button onClick={() => handleDelete(id)}>Delete</button>
          </div>
        ))}
      </div>

      <div style={{ marginTop: "20px" }}>
        <h3>Set/Edit Manager PIN</h3>
        <input
          type="text"
          placeholder="Enter new PIN"
          value={pin}
          onChange={(e) => setPin(e.target.value)}
        />
        <button onClick={() => {
          if (/^\d+$/.test(pin)) {
            setSavedPin(pin);
            setPin('');
            alert("Manager PIN updated.");
          } else {
            alert("PIN must contain only numbers.");
          }
        }}>
          Save PIN
        </button>
        <p><i>Current PIN: {savedPin || "Not Set"}</i></p>
      </div>

      <Link to="/Manager" className="Manager">Go back</Link>
    </div>
  );
}
