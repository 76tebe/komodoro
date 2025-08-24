import React from "react";

export default function useLocalStorage(key, initialValue) {
    const readValue = () => {
        try {
            const item = localStorage.getItem(key);
            return item !== null ? JSON.parse(item) : initialValue;
        } catch {
            return initialValue;
        }
    }

    const [storedValue, setStoredValue] = React.useState(readValue);

    React.useEffect(() => {
        try {
            localStorage.setItem(key, JSON.stringify(storedValue));
        } catch (error) {
            console.error("failed to save to local storage:", error);
        }
    }, [key, storedValue]);

    return [storedValue, setStoredValue];
}