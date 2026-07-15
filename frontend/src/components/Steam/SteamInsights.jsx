import {

    Bar

} from "react-chartjs-2";

import {

    Chart,

    CategoryScale,

    LinearScale,

    BarElement,

    Tooltip,

    Legend

} from "chart.js";

Chart.register(

    CategoryScale,

    LinearScale,

    BarElement,

    Tooltip,

    Legend

);

function SteamInsights({

    biblioteca

}) {

    if (!biblioteca.length) {

        return null;

    }

    const top = [...biblioteca]

        .sort(

            (a,b)=>

            b.playtime_forever-

            a.playtime_forever

        )

        .slice(0,5);

    const data = {

        labels:

            top.map(

                g=>g.name

            ),

        datasets:[

            {

                label:"Horas",

                data:

                top.map(

                    g=>

                    Math.floor(

                        g.playtime_forever/

                        60

                    )

                )

            }

        ]

    };

    return(

        <div className="steam-section">

            <h3>

                📊 Steam Insights

            </h3>

            <Bar

                data={data}

            />

        </div>

    );

}

export default SteamInsights;