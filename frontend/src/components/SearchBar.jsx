import { useTranslation } from "react-i18next";

function SearchBar({ valor, cambiar }) {

    const { t } = useTranslation();

    return (

        <input

            type="text"

            placeholder={t("catalog.search")}

            value={valor}

            onChange={(e) => cambiar(e.target.value)}

            style={{

                width: "100%",

                padding: "15px",

                borderRadius: "10px",

                border: "1px solid #CCC",

                fontSize: "16px",

                marginBottom: "25px"

            }}

        />

    );

}

export default SearchBar;