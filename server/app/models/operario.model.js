'use strict'
module.exports = (sequelize, Sequelize) => {
	const Operario = sequelize.define('operario', {
	  nombre: {
		  type: Sequelize.STRING
		},
		apellido: {
		  type: Sequelize.STRING
		},
		pin: {
			type: Sequelize.INTEGER,
			defaultvalue: 1234
		},
		activo: {
			type: Sequelize.BOOLEAN,
			defaultValue: true
		}
	});
	
	return Operario;
}