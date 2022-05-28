const {DataTypes} = require("sequelize");
// Traemos el sequelize instanciado
const {sequelize} = require("../../config/mysql");

// Definimos modelo sql
const User = sequelize.define(
  // Creamos tabla 'users' con sus campos
  "users",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.NUMBER,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    role: {
      type: DataTypes.ENUM(["user", "admin"]),
    },
  },
  {
    timestamps: true,
  }
);

module.exports = User;
