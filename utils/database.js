const mysql = require("mysql2/promise");
const dotenv = require("dotenv");

dotenv.config();

async function executar(query, values) {
  const config = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
  };

  const connection = await mysql.createConnection(config);
  const [row, fields] = await connection.execute(query, values);

  return row;
}

module.exports = { executar };
