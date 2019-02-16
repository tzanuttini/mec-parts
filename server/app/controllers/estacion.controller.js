const db = require('../configs/db.config');
const Op = db.Sequelize.Op;
const Estacion = db.estacion;
const Terminal = db.terminal;

// Iniciar datos: Estacion (1 - Testing)
exports.init = (req, res) => {
  Estacion.create({
    nombre: 'Estación de Pruebas',
  });

  Estacion.create({
    nombre: 'Pintura',
  });

  Estacion.create({
    nombre: 'Mec Brida + Cámara',
  });

  Estacion.create({
    nombre: 'Mecanizado en CM',
  });

  Estacion.create({
    nombre: 'Terminación y lavado',
  });

  Estacion.create({
    nombre: 'Reparaciones',
  });

  Estacion.create({
    nombre: 'Armado',
  });

  Estacion.create({
    nombre: 'Mecanizado de componentes',
  });

  Estacion.create({
    nombre: 'Perforado / Anodizado',
  });

  Estacion.create({
    nombre: 'Cilindros de rueda',
  });

  Estacion.create({
    nombre: 'Expedición',
  });

  Estacion.create({
    nombre: 'Garantías',
  });

  Estacion.create({
    nombre: 'Scrap Bombas',
  });

  Estacion.create({
    nombre: 'Scrap Cilindros de Rueda',
  });

  // return res.send('Rubros Ok');

}

// Listar todos las estaciones
exports.findAll = (req, res) => {
  Estacion.findAll({
    attributes: ['id', 'nombre'],
    include: [{
      model: Terminal,
      as: 'terminales',
      attributes: ['id', 'nombre', 'estado']
    }],
    where: {
      id: {
        [Op.gt]: 1
      }
    },
    order: [['id','ASC']]  
  }).then(estaciones => {
    res.json(estaciones);
  });
}

// Listar todos las estaciones
exports.findAllStock = (req, res) => {
  Estacion.findAll({
    attributes: ['id', 'nombre'],
    include: [{
      model: Terminal,
      as: 'terminales',
      attributes: ['id', 'nombre', 'estado']
    }],
    where: {
      id: {
        [Op.gt]: 0
      }
    },
    order: [['id','ASC']]  
  }).then(estaciones => {
    res.json(estaciones);
  });
}

// Buscar por id
exports.findById = (req, res) => {
  Estacion.findByPk(req.params.id, {
    attributes: ['id', 'nombre']
  }).then(rub => res.json(rub))
};

// Borrar por id
exports.destroy = (req, res) => {
  if (req.params.id > 1) {
    Estacion.destroy({
      where: {
        id: req.params.id
      }
    }).then(response => {
      // puse esta query porque on delete set default no esta en el ORM
      db.sequelize.query('UPDATE estaciones SET "rubroId" = 1 WHERE "rubroId" IS NULL');
      res.json(response)
    })
  } else {
    res.sendStatus(405); // metodo no permitido (de borrar el 1)
  }
}

// Estacion nueva
exports.create = (req, res) => {
  Estacion.create({
    nombre: req.body.nombre
  }).then(rub => {
    res.send(rub)
    console.log(rub.get())
  })

}

// Actualiza por id
exports.update = (req, res) => {
  Estacion.update({
      nombre: req.body.nombre
    }, {
      where: {
        id: req.params.id
      }
    })
    .then((count) => {
      console.log('Estaciones Actualizadas: ' + count);
      res.json(Estacion.findByPk(req.params.id))
    })
}
