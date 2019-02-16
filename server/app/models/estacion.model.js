'use strict'
module.exports = (sequelize, Sequelize) => {
    const Estacion = sequelize.define('estacion', {
        nombre: {
            type: Sequelize.STRING
        }
    }, {
        tableName: 'estaciones',
        timestamps: false,
    });

    return Estacion;
}