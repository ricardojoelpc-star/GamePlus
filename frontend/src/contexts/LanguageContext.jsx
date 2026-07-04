import { createContext, useContext, useEffect, useState } from "react";
import i18n from "../i18n";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {

    const [language, setLanguage] = useState(
        localStorage.getItem("language") || "es"
    );

    useEffect(() => {

        i18n.changeLanguage(language);

        localStorage.setItem(
            "language",
            language
        );

    }, [language]);

    function changeLanguage(newLanguage) {

        setLanguage(newLanguage);

    }

    return (

        <LanguageContext.Provider
            value={{
                language,
                changeLanguage
            }}
        >

            {children}

        </LanguageContext.Provider>

    );

}

export function useLanguage() {

    return useContext(LanguageContext);

}