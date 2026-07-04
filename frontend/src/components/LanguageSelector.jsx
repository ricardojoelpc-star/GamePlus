import { useTranslation } from "react-i18next";
import { useLanguage } from "../contexts/LanguageContext";

function LanguageSelector() {

    const { t } = useTranslation();

    const { language, changeLanguage } = useLanguage();

    return (

        <div>

            <label>

                {t("language")}

            </label>

            <select

                value={language}

                onChange={(e) => changeLanguage(e.target.value)}

            >

                <option value="es">🇲🇽 Español</option>

                <option value="en">🇺🇸 English</option>

                <option value="fr">🇫🇷 Français</option>

                <option value="it">🇮🇹 Italiano</option>

                <option value="de">🇩🇪 Deutsch</option>

            </select>

        </div>

    );

}

export default LanguageSelector;