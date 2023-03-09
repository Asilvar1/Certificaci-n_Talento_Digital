const sequelize = require('../config/connection.js')
const {DataTypes} = require("sequelize")


const productos=sequelize.define('productos', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    precio: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    imagen: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    timestamps: false,
  });

 module.exports = productos;
