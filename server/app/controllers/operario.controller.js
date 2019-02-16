const db = require('../configs/db.config');
const Operario = db.operario;
const Op = db.Sequelize.Op;

// Iniciar datos: Operarios & pines
exports.init = (req, res) => {
	Operario.create({
		nombre: 'Andrea',
		apellido: 'Perez',
		pin: 1234
	});
	
	Operario.create({
		nombre: 'Daniel',
		apellido: 'Suarez',
		pin: 1234
	});
    
	Operario.create({
		nombre: 'Marcos',
		apellido: 'Guerra',
		pin: 1234
	});
	
	Operario.create({
		nombre: 'Luisa',
		apellido: 'Frias',
		pin: 1234
	});

	// return res.send('Operarios Ok');

};

// Listar todos los Operarios
exports.findAll = (req, res) => {
	Operario.findAll({
		attributes: ['id','nombre', 'apellido', 'pin', 'activo'],
		order: [['apellido','ASC'], ['nombre','ASC']]		
	}).then(operarios => {
		res.json(operarios);
    });
};

exports.findById = (req, res) => {
	Operario.findByPk(req.params.id, {
	  attributes: ['id', 'nombre', 'apellido', 'pin', 'activo']
	}).then(ope => res.json(ope))
  };
  
  exports.destroy = (req, res) => {
	Operario.destroy({
	  where: {
		id: req.params.id
	  }
	}).then(response => res.json(response))
  }
  
  exports.create = (req, res) => {
	Operario.create({
	  nombre: req.body.nombre,
	  apellido: req.body.apellido,
	  pin: req.body.pin,
	  activo: req.body.activo
	}).then(ope => {
	  res.send(ope)
	  console.log(ope.get())
	})
  
  }
  
  exports.update = (req, res) => {
		Operario.update({
		nombre: req.body.nombre,
		apellido: req.body.apellido,
		pin: req.body.pin,
		activo: req.body.activo
	  }, {
		where: {
		  id: req.params.id
		}
	  })
	  .then((count) => {
		console.log('Operarios actualizados: ' + count);
		res.json(Operario.findByPk(req.params.id))
	  })
  
  }
  
