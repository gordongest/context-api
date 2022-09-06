import React, { createContext, useContext } from "react";
import useToggleState from "../hooks/useToggleState";

const themes = {
    light: {
        backgroundColor: "white"
    },
    dark: {
        backgroundColor: "black"
    }
}

const ThemeContext = createContext(themes.dark);

const ThemeContextProvider = ({ children }) => {
    const [isDarkTheme, toggleTheme] = useToggleState(false);

    return (
        <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export { ThemeContext, ThemeContextProvider };