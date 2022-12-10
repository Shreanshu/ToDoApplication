import { useEffect, useState } from "react"



export const useLocalStorage = (initialValue = {}) => {
    const [localStorage, setLocalStorage] = useState(initialValue);

    useEffect( () => {
        for (let key in localStorage)
            {
                window.localStorage.setItem(key, localStorage[key]);
            }
    }, [localStorage]);

    const getLocalStorage = () => {
        let data = [];

        for (let key in localStorage)
            {
                data.push(window.localStorage.getItem(key));
            }

        return data;
    }

    return [setLocalStorage, getLocalStorage];
}