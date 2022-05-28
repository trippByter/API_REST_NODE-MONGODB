/*
 * Este es un manejador de motor de base de datos
 * MYSQL O NOSQL
 * */

const ENGINE_DB = process.env.ENGINE_DB;
const getProperties = () => {
  const data = {
    // Cuando la bd este usando "nosql",
    // para la query, tomar "_id". Viceversa co mysql
    nosql: {
      id: "_id"
    },
    mysql: {
      id: "id"
    }
  }
  
  return data[ENGINE_DB];
};

module.exports = getProperties;
