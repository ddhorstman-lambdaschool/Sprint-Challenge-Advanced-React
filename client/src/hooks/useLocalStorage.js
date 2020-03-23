
import React from "react";
export default function useLocalStorage(key, initialValue) {
    const [value, setValue] = React.useState(() =>
        JSON.parse(
            window.localStorage.getItem(key)
            ?? JSON.stringify(initialValue)
        ));
    window.localStorage.setItem(key, JSON.stringify(initialValue));
    const setValueLocalStorage = (newValue) => {
        setValue(newValue);
        window.localStorage.setItem(key, JSON.stringify(newValue));
    };
    return [value, setValueLocalStorage];
}