const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('Talento_Digital', 'postgres', 'comando', {
    host: 'localhost',
    dialect: 'postgres'
});

try{
    sequelize.authenticate(); 
    //crea la tabla en caso que no exista
    sequelize.sync({force:false});
    console.log("Conexión con base de datos fue exitosa");
}catch (error){
        console.log('No se pudo realizar la conexión:', error);

    }

module.exports = sequelize;