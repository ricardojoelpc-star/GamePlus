function PageTitle({

    icon,

    title,

    subtitle

}) {

    return (

        <div className="page-title">

            <h1>

                {icon} {title}

            </h1>

            {

                subtitle && (

                    <p>

                        {subtitle}

                    </p>

                )

            }

        </div>

    );

}

export default PageTitle;