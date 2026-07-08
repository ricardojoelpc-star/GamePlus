import { useTranslation } from "react-i18next";

function EmptyState({

    icon="📂",

    title,

    description

}){

    const {t}=useTranslation();

    return(

        <div className="empty-state">

            <h1>{icon}</h1>

            <h2>{title}</h2>

            <p>{description}</p>

        </div>

    );

}

export default EmptyState;