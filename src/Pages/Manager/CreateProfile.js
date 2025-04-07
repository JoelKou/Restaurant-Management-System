import { Link } from "react-router-dom";
import React, { useState } from 'react';


export function CreateProfile() {
    const [employeeMap, setEmployeeMap] = useState(new Map());
    const [employeeName, setEmployeeName] = useState('');
    const [employeeID, setEmployeeID] = useState('');
    const [employeeRole, setEmployeeRole] = useState('');
  
    const handleSubmit = () => {
      if (employeeName && employeeID && employeeRole) {
        const newMap = new Map(employeeMap);
        newMap.set(employeeID, {
          name: employeeName,
          role: employeeRole,
        });
        setEmployeeMap(newMap);
        setEmployeeName('');
        setEmployeeID('');
        setEmployeeRole('');
      }
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
        <input
          type="text"
          placeholder="Role"
          value={employeeRole}
          onChange={(e) => setEmployeeRole(e.target.value)}
        />
        <button onClick={handleSubmit}>Add Employee</button>
  
        <div>
          <h3>Employee List</h3>
          <ul>
            {Array.from(employeeMap.entries()).map(([id, data]) => (
              <li key={id}>
                <strong>ID:</strong> {id} | <strong>Name:</strong> {data.name} | <strong>Role:</strong> {data.role}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
  
