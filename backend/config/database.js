const oracledb = require('oracledb');

const dbConfig = {
    user: "System",
    password: "RicardoJoel17",
    connectString: "localhost:1521/xe"
};

async function getConnection() {
    return await oracledb.getConnection(dbConfig);
}

module.exports = getConnection;