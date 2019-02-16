'use strict'
module.exports = (sequelize, Sequelize) => {
  const Parte = sequelize.define('parte', {
    codigo: {
      type: Sequelize.STRING,
      allownull: false
    },
    nombre: {
      type: Sequelize.STRING
    },
    descripcion: {
      type: Sequelize.STRING
    },
    activa: {
      type: Sequelize.BOOLEAN,
      defaultValue: true
    }
  }, {
    indexes: [
      // Creamos a indice unico para el codigo mecpart
      {
        unique: true,
        fields: ['codigo']
      }
    ]
  }, {
    tableName: 'partes',
    timestamps: false,
  });

  return Parte;
}
