import {useState, useEffect} from "react";

const getInitialIcon = () => {
    const iconFromLocalStorage = localStorage.getItem("icon");

    return iconFromLocalStorage
    ? JSON.parse(iconFromLocalStorage)
    : [];
};


export const useSwitchIcon = () => {

    const [icon, setIcon] = useState(getInitialIcon);

    
    useEffect(() => {
        localStorage.setItem("icon",
        JSON.stringify(icon));
    }, [icon]);

return {
    icon, setIcon
}
};