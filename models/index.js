const ENGINE_DB = process.env.ENGINE_DB;
// Indicamos las rutas a usar dependiendo del ENGINE_DB
const pathModels = (ENGINE_DB === "nosql") ? "./nosql" : "./mysql";
const models = {
    usersModel: require(`${pathModels}/users`),
    tracksModel: require(`${pathModels}/tracks`),
    storageModel: require(`${pathModels}/storage`)
};

module.exports = models;
