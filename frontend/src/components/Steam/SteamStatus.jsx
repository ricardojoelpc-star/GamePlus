function SteamStatus({ state }) {

    const estados = {

        0: {
            texto: "Desconectado",
            color: "#6B7280"
        },

        1: {
            texto: "En línea",
            color: "#10B981"
        },

        2: {
            texto: "Ocupado",
            color: "#EF4444"
        },

        3: {
            texto: "Ausente",
            color: "#F59E0B"
        },

        4: {
            texto: "Ausente",
            color: "#F59E0B"
        },

        5: {
            texto: "Buscando intercambio",
            color: "#3B82F6"
        },

        6: {
            texto: "Buscando jugar",
            color: "#8B5CF6"
        }

    };

    const estado = estados[state] || estados[0];

    return (

        <span

            style={{

                color: estado.color,

                fontWeight: "bold"

            }}

        >

            ● {estado.texto}

        </span>

    );

}

export default SteamStatus;