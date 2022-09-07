import React, { createContext, useState } from "react";

const LanguageContext = createContext();

const LanguageContextProvider = ({ children }) => {
    const [language, setLanguage] = useState("english");

    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    )
}

// HOC for use in class-based components, not needed when using hooks/React.useContext()
const withLanguageContext = Component => props => (
    <LanguageContext.Consumer>
        {value => <Component languageContext={value} {...props} />}
    </LanguageContext.Consumer>
);

export { LanguageContext, LanguageContextProvider, withLanguageContext };