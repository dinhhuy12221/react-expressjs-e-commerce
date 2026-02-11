import { useState, useEffect } from "react";

const getLocalValue = (key, initValue) => {
    try {
        // SSR Next.js
        if (typeof window === 'undefined') return initValue;
    
        // if a value is already stored
        const localValue = JSON.parse(localStorage.getItem(key));
        if (localValue) return localValue;
    
        // return result of a function
        if (initValue instanceof Function) return initValue();
        return initValue;

    } catch (error) {
        
    }
    
}

const useLocalStorage = (key, initValue) => {
    const [value, setValue] = useState(() => getLocalValue(key, initValue))

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue] as const;
}

export default useLocalStorage;