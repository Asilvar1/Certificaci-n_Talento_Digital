const sequelize = require('../config/connection.js')
const {DataTypes} = require("sequelize")


const noticias=sequelize.define('noticias', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    título: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    imagen: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    texto: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: true
    },
    autor: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    likes: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
    ,
    dislikes: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    timestamps: false,
  });

  

 module.exports = noticias;
