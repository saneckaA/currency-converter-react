import { useEffect, useState } from "react";

export const useSwitchTheme = () => {
    const [themes, setThemes] = useState(JSON.parse(localStorage.getItem("themes")) || []);

    const switchTheme = () => {
      setThemes((prev) => prev === "light" ? "dark" : "light");
    };

    useEffect(() => {
        localStorage.setItem("themes",
        JSON.stringify(themes));
    }, [themes]);

    return [
        themes, 
        switchTheme
    ]
};