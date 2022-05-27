const {Sequelize} = require("sequelize");

// Nos conectamos a la base de datos
const database = process.env.MYSQL_DATABASE;
const username = process.env.MYSQL_USER;
const password = process.env.MYSQL_PASSWORD;
const host = process.env.MYSQL_HOST;

const sequelize = new Sequelize(
  database,
  username,
  password,
  {
    host,
    dialect:"mysql",
  }
);

const dbConnectMySql = async () => {
  try{
    await sequelize.authenticate();
    console.log("CONEXION CORRECTA");
  }catch(e){
    console.log("ERROR DE CONEXION MYSQL", e);
  }
};

module.exports = {sequelize, dbConnectMySql};
