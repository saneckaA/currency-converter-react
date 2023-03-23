import { useEffect, useState } from "react";

export const useSwitchTheme = () => {

    const [themes, setThemes] = useState(JSON.parse(localStorage.getItem("themes")) || []);

    const switchTheme = () => {
      if(themes === "light") {
        setThemes("dark");
      } else {
        setThemes("light");
      }
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