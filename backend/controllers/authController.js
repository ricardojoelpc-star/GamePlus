const bcrypt = require("bcrypt");
const Usuario = require("../models/Usuario");

async function register(req, res) {

    try {

        const { nombre, correo, password } = req.body;

        const passwordHash = await bcrypt.hash(password, 10);

        await Usuario.crearUsuario({

            nombre,
            correo,
            password: passwordHash,
            idioma: "Español",
            tema: "Azul",
            modoOscuro: 0

        });

        res.status(201).json({
            mensaje: "Usuario registrado correctamente"
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            mensaje: "Error al registrar usuario"
        });

    }

}

module.exports = {
    register
};