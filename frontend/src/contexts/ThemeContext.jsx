import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {

    function setDarkMode(enabled) {

        setTheme(enabled ? "dark" : "light");

    }

    function cargarPreferencias(preferencias) {

        if (preferencias.tema) {

            setColor(preferencias.tema.toLowerCase());

        }

        if (preferencias.modoOscuro !== undefined) {

            setTheme(

                preferencias.modoOscuro ? "dark" : "light"

            );

        }

    }

    const [theme, setTheme] = useState(

        localStorage.getItem("theme") || "light"

    );

    const [color, setColor] = useState(

        localStorage.getItem("color") || "blue"

    );

    useEffect(() => {

        document.documentElement.setAttribute(

            "data-theme",

            theme

        );

        localStorage.setItem(

            "theme",

            theme

        );

    }, [theme]);

    useEffect(() => {

        document.documentElement.setAttribute(

            "data-color",

            color

        );

        localStorage.setItem(

            "color",

            color

        );

    }, [color]);

    function toggleTheme() {

        setTheme(

            theme === "light"

                ? "dark"

                : "light"

        );

    }

    return (

        <ThemeContext.Provider

            value={{

                theme,

                color,

                setColor,

                toggleTheme,

                setDarkMode,

                cargarPreferencias

            }}

        >

            {children}

        </ThemeContext.Provider>

    );

}

export function useTheme() {

    return useContext(ThemeContext);

}