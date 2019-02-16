'use strict'
module.exports = (sequelize, Sequelize) => {
    const Maquina = sequelize.define('maquina', {
        nombre: {
            type: Sequelize.STRING
        }
    }, {
        tableName: 'maquinas',
        timestamps: false,
    });

    return Maquina;
}