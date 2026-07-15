const oracledb = require("oracledb");

const dbConfig = {

    user: process.env.DB_USER,

    password: process.env.DB_PASSWORD,

    connectString: process.env.DB_CONNECTION_STRING

};

async function getConnection() {

    return await oracledb.getConnection(dbConfig);

}

module.exports = getConnection;

//Conexión local
// module.exports = getConnection;

// const oracledb = require('oracledb');

// const dbConfig = {
//     user: "System",
//     password: "RicardoJoel17",
//     connectString: "localhost:1521/xe"
// };

// async function getConnection() {
//     return await oracledb.getConnection(dbConfig);
// }

// module.exports = getConnection;