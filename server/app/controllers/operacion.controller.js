const db = require('../configs/db.config');
const Op = db.Sequelize.Op;
const Operacion = db.operacion;

// Iniciar datos: Maquina (1 - Testing)
exports.init = (req, res) => {
  Operacion.create({
    nombre: 'Operación de Pruebas'
  });

  Operacion.create({
    nombre: 'Granallar'
  });

  Operacion.create({
    nombre: 'Pulir'
  });

  Operacion.create({
    nombre: 'Ensamblar'
  });
  // return res.send('Operaciones Ok');

}

// Listar todos las operaciones excluida la de pruebas
exports.findAll = (req, res) => {
  Operacion.findAll({
    attributes: ['id', 'nombre'],
    where: {
      id: {
        [Op.gt]: 1
      }
    },
    order: [
      ['nombre', 'ASC']
    ]
  }).then(operaciones => {
    res.json(operaciones);
  });
}

// Listar todos las operaciones incluida la de pruebas
exports.findAllStock = (req, res) => {
  Operacion.findAll({
    attributes: ['id', 'nombre'],
    order: [
      ['nombre', 'ASC']
    ]
  }).then(ops => {
    res.json(ops);
  });
};

// Buscar por id
exports.findById = (req, res) => {
  Operacion.findByPk(req.params.id, {
    attributes: ['id', 'nombre']
  }).then(ope => res.json(ope))
};

// Borrar por id
exports.destroy = (req, res) => {
  if (req.params.id > 1) {
    Operacion.destroy({
      where: {
        id: req.params.id
      }
    }).then(response => {
      res.json(response)
    })
  } else {
    res.sendStatus(405); // metodo no permitido (de borrar el 1)
  }
}

// Operacion nueva
exports.create = (req, res) => {
  Operacion.create({
    nombre: req.body.nombre
  }).then(ope => {
    res.send(ope)
    console.log(ope.get())
  })

}

// Actualiza por id
exports.update = (req, res) => {
  Operacion.update({
      nombre: req.body.nombre
    }, {
      where: {
        id: req.params.id
      }
    })
    .then((count) => {
      console.log('Operaciones Actualizadas: ' + count);
      res.json(Operacion.findByPk(req.params.id))
    })
}
