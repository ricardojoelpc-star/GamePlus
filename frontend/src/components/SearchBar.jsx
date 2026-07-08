import Input from "./common/Input";
import { useTranslation } from "react-i18next";

function SearchBar({

    value,

    onChange,

    placeholder

}) {

    const { t } = useTranslation();

    return (

        <div className="searchbar">

            <Input

                value={value}

                placeholder={

                    placeholder ||

                    t("search.placeholder")

                }

                onChange={(e) =>

                    onChange(e.target.value)

                }

            />

        </div>

    );

}

export default SearchBar;