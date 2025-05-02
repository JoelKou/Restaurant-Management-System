import { useState, useEffect } from 'react'; // Import hooks

// Custom hook for Map with localStorage
export function useMapLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key); // Get stored value
      if (item) {
        return new Map(JSON.parse(item)); // Parse and return as Map
      }
      return initialValue; // Return initial value if not found
    } catch (error) {
      console.error("Error reading from localStorage:", error); // Log error
      return initialValue; // Return initial value on error
    }
  });

  useEffect(() => {
    try {
      const array = Array.from(storedValue.entries()); // Convert Map to array
      window.localStorage.setItem(key, JSON.stringify(array)); // Save to localStorage
    } catch (error) {
      console.error("Error saving to localStorage:", error); // Log error
    }
  }, [key, storedValue]); // Update when value or key changes

  return [storedValue, setStoredValue]; // Return value and setter
}
