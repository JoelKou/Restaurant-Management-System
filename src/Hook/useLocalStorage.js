import { useState, useEffect } from 'react'; // Import hooks

// Custom hook for localStorage
export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const saved = localStorage.getItem(key); // Get saved value
    return saved ? JSON.parse(saved) : initialValue; // Return saved or initial value
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value)); // Save value to localStorage
  }, [key, value]); // Update on change

  return [value, setValue]; // Return value and setter
}
