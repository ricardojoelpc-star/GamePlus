async function obtenerVideojuegos() {

    return [

        {
            id: 1,
            titulo: "Minecraft",
            imagen: "https://placehold.co/300x400",
            descripcion: "Sandbox"
        },

        {
            id: 2,
            titulo: "GTA V",
            imagen: "https://placehold.co/300x400",
            descripcion: "Acción"
        },

        {
            id: 3,
            titulo: "The Witcher 3",
            imagen: "https://placehold.co/300x400",
            descripcion: "RPG"
        }

    ];

}

module.exports = {
    obtenerVideojuegos
};