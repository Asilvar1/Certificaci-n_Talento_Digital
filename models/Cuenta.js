
import {DataTypes} from 'sequelize';
import db from '../config/db.js';

const Cuenta = db.define('cuentas',{
    //estructura de la tabla
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    balance:{
        type: DataTypes.INTEGER,
        allowNull: false
    }
},{timestamps:false}
);

export default Cuenta