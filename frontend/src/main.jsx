import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import "./index.css";
import "./i18n";
import "./themes/variables.css";

import "./themes/variables.css";

import "./styles/globals/Base.css";
import "./styles/globals/Buttons.css";
import "./styles/globals/Forms.css";
import "./styles/globals/Cards.css";
import "./styles/globals/Tables.css";
import "./styles/globals/Animations.css";
import "./styles/globals/Utilities.css";

import "./index.css";

import { AuthProvider } from "./contexts/AuthContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import { ThemeProvider } from "./contexts/ThemeContext";

ReactDOM.createRoot(document.getElementById("root")).render(

    <React.StrictMode>

        <ThemeProvider>

            <AuthProvider>

                <LanguageProvider>

                    <App />

                </LanguageProvider>

            </AuthProvider>

        </ThemeProvider>

    </React.StrictMode>

);