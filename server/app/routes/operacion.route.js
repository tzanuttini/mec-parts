module.exports = function (app) {

  const operaciones = require('../controllers/operacion.controller.js');

  // endpoints

  // Iniciar datos: add Maquinas
  app.get('/api/operaciones/iniciar', operaciones.init);

  // Trae todos las maquinas (no incluye la de prueba)
  app.get('/api/operaciones', operaciones.findAll);

  // Trae todos las maquinas (incluye la de prueba)
  app.get('/api/todaslasoperaciones', operaciones.findAllStock);

  // busca una maquina por su id
  app.get('/api/operacion/:id', operaciones.findById);

  // Borra una maquina por su id
  app.delete('/api/operacionborrar/:id', operaciones.destroy);

  // Inserta una maquina nueva
  app.post('/api/operacionnueva/', operaciones.create);

  // Actualiza una maquina por su id
  app.put('/api/operacionupdate/:id', operaciones.update);
}
