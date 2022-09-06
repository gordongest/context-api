import React, { createContext } from "react";
import useToggleState from "../hooks/useToggleState";

const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
    const [isDarkTheme, toggleTheme] = useToggleState(false);

    return (
        <ThemeContext.Provider value={{ isDarkTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider;