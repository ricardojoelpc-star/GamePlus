import { useTheme } from "../contexts/ThemeContext";
import { useTranslation } from "react-i18next";

function ThemeSelector() {

    const {

        theme,

        color,

        toggleTheme,

        setColor

    } = useTheme();

    const { t } = useTranslation();

    return (

        <div>

            <label>

                {t("profile.theme")}

            </label>

            <br />

            <select

                value={color}

                onChange={(e) =>

                    setColor(e.target.value)

                }

            >

                <option value="blue">

                    🔵 {t("themes.blue")}

                </option>

                <option value="green">

                    🟢 {t("themes.green")}

                </option>

                <option value="purple">

                    🟣 {t("themes.purple")}

                </option>

            </select>

            <br /><br />

            <button

                type="button"

                onClick={toggleTheme}

            >

                {

                    theme === "light"

                        ? `🌙 ${t("themes.darkMode")}`

                        : `☀️ ${t("themes.lightMode")}`

                }

            </button>

        </div>

    );

}

export default ThemeSelector;