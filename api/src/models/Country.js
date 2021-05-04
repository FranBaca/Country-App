const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Country', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    code:{
      type: DataTypes.STRING(3),
      allowNull:false,
      unique:true
    },
    continent: {
      type: DataTypes.STRING
    },
    flag: {
      type: DataTypes.STRING,
      allowNull:false
    },
    capital: {
      type: DataTypes.STRING,
      allowNull:false
    },
    subregion:{
      type: DataTypes.STRING,   
    },
    area:{
      type: DataTypes.REAL
    },
    population: {
      type: DataTypes.REAL
    },
    
  });
};
