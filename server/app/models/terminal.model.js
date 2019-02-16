'use strict'
module.exports = (sequelize, Sequelize) => {
    const Terminal = sequelize.define('terminal', {
        nombre: {
            type: Sequelize.STRING
        },
        estado: {
            type: Sequelize.STRING
        }
    }, {
        tableName: 'terminales',
        timestamps: true,
    });

    return Terminal;
}