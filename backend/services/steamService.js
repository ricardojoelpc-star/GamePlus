const axios = require("axios");

const API_KEY = process.env.STEAM_API_KEY;
console.log("API KEY:", process.env.STEAM_API_KEY);

const BASE_URL = "https://api.steampowered.com";

async function obtenerPerfil(steamId) {

    try {

        const respuesta = await axios.get(

            `${BASE_URL}/ISteamUser/GetPlayerSummaries/v2/`,

            {

                params: {

                    key: API_KEY,

                    steamids: steamId

                }

            }

        );

        return respuesta.data.response.players[0];

    }

    catch (error) {

        console.error(error);

        throw error;

    }

}

async function obtenerBiblioteca(steamId) {

    try {

        const respuesta = await axios.get(

            `${BASE_URL}/IPlayerService/GetOwnedGames/v1/`,

            {

                params: {

                    key: API_KEY,

                    steamid: steamId,

                    include_appinfo: true,

                    include_played_free_games: true

                }

            }

        );

        return respuesta.data.response.games || [];

    }

    catch (error) {

        console.error(error);

        throw error;

    }

}

async function obtenerRecientes(steamId) {

    try {

        const respuesta = await axios.get(

            `${BASE_URL}/IPlayerService/GetRecentlyPlayedGames/v1/`,

            {

                params: {

                    key: API_KEY,

                    steamid: steamId

                }

            }

        );

        return respuesta.data.response.games || [];

    }

    catch (error) {

        console.error(error);

        throw error;

    }

}

async function guardarCuentaSteam(idUsuario, perfil) {

    const getConnection = require("../config/database");

    const connection = await getConnection();

    try {

        await connection.execute(

            `
            UPDATE USUARIOS
            SET

                STEAM_ID = :steamId,

                STEAM_USERNAME = :username,

                STEAM_AVATAR = :avatar

            WHERE ID_USUARIO = :idUsuario
            `,

            {

                idUsuario,

                steamId: perfil.steamid,

                username: perfil.personaname,

                avatar: perfil.avatarfull

            },

            {

                autoCommit: true

            }

        );

    }

    finally {

        await connection.close();

    }

}

async function obtenerSteamPorUsuario(idUsuario) {

    const getConnection = require("../config/database");

    const connection = await getConnection();

    try {

        const result = await connection.execute(

            `
            SELECT STEAM_ID
            FROM USUARIOS
            WHERE ID_USUARIO = :idUsuario
            `,

            {

                idUsuario

            },

            {

                outFormat: require("oracledb").OUT_FORMAT_OBJECT

            }

        );

        if (result.rows.length === 0) {

            return null;

        }

        const steamId = result.rows[0].STEAM_ID;

        if (!steamId) {

            return null;

        }

        const perfil = await obtenerPerfil(

            steamId

        );

        const biblioteca = await obtenerBiblioteca(

            steamId

        );

        const recientes = await obtenerRecientes(

            steamId

        );

        return {

            perfil,

            biblioteca,

            recientes

        };

    }

    finally {

        await connection.close();

    }

}

async function desvincularCuenta(idUsuario) {

    const getConnection = require("../config/database");

    const connection = await getConnection();

    try {

        await connection.execute(

            `
            UPDATE USUARIOS
            SET

                STEAM_ID = NULL,
                STEAM_USERNAME = NULL,
                STEAM_AVATAR = NULL

            WHERE ID_USUARIO = :idUsuario
            `,

            {

                idUsuario

            },

            {

                autoCommit: true

            }

        );

    }

    finally {

        await connection.close();

    }

}

module.exports = {

    obtenerPerfil,
    obtenerBiblioteca,
    obtenerRecientes,
    guardarCuentaSteam,
    obtenerSteamPorUsuario,
    desvincularCuenta

};