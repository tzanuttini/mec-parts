'use strict'
module.exports = (sequelize, Sequelize) => {
  const Operacion = sequelize.define('operacion', {
    nombre: {
      type: Sequelize.STRING
    }
  }, {
    tableName: 'operaciones',
    timestamps: false,
  });

  return Operacion;
}
