const {DataTypes} = require("sequelize");
// Traemos el sequelize instanciado
const {sequelize} = require("../../config/mysql");

// Definimos modelo sql
const Storage = sequelize.define(
  // Creamos tabla 'users' con sus campos
  "storages",
  {
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    filename: {
      type: DataTypes.STRING,
    }
  },
  {
    timestamps: true,
  }
);

module.exports = Storage;
