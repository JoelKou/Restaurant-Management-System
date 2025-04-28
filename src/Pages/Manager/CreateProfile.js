import { Link } from "react-router-dom";
import React, { useState } from 'react';
import { useMapLocalStorage } from "../../Hook/useMapLocalStorage";

export function CreateProfile() {
  const [employeeMap, setEmployeeMap] = useMapLocalStorage("employeeMap", new Map());
  const [employeeName, setEmployeeName] = useState('');
  const [employeeID, setEmployeeID] = useState('');
  const [employeeRole, setEmployeeRole] = useState('');
  
  const handleSubmit = () => {
    if (employeeName && employeeID && employeeRole) {
      const copyMap = new Map(employeeMap);
      copyMap.set(employeeID, {
        name: employeeName,
        role: employeeRole,
      });
      setEmployeeMap(copyMap);
      setEmployeeName('');
      setEmployeeID('');
      setEmployeeRole('');
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
      <input
        type="text"
        placeholder="Role"
        value={employeeRole}
        onChange={(e) => setEmployeeRole(e.target.value)}
      />
      <button onClick={handleSubmit}>Add Employee</button>
  
      <div>
        <h3>Employee List</h3>
        {Array.from(employeeMap.entries()).map(([id, data]) => (
          <div key={id}>
            <p><strong>ID:</strong> {id}</p>
            <p><strong>Name:</strong> {data.name}</p>
            <p><strong>Role:</strong> {data.role}</p>
            <button onClick={() => handleDelete(id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}
