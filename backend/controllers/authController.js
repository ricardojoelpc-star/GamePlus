const bcrypt = require("bcrypt");
const Usuario = require("../models/Usuario");
const jwt = require("jsonwebtoken");

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

async function login(req, res) {

    try {

        const { correo, password } = req.body;

        const usuario = await Usuario.buscarPorCorreo(correo);

        if (!usuario) {

            return res.status(404).json({
                mensaje: "Usuario no encontrado"
            });

        }

        const coincide = await bcrypt.compare(password, usuario.PASSWORD);

        if (!coincide) {

            return res.status(401).json({
                mensaje: "Contraseña incorrecta"
            });

        }

        const token = jwt.sign(

            {
                id: usuario.ID_USUARIO,
                correo: usuario.CORREO
            },

            "GAMEPLUS_SECRET",

            {
                expiresIn: "2h"
            }

        );

        res.json({

            mensaje: "Login correcto",

            token,

            usuario: {

                id: usuario.ID_USUARIO,
                nombre: usuario.NOMBRE,
                correo: usuario.CORREO,
                idioma: usuario.IDIOMA,
                tema: usuario.TEMA

            }

        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            mensaje: "Error interno"
        });

    }

}

module.exports = {
    register,
    login
};