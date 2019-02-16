module.exports = function(app) {
 
    const estaciones = require('../controllers/estacion.controller.js');
 
    // endpoints
    
    // Iniciar datos: add Estaciones & Terminales
    app.get('/api/estaciones/iniciar', estaciones.init);
 
    // Trae todos los estaciones (no incluye la de prueba)
    app.get('/api/estaciones', estaciones.findAll);

    // Trae todos las estaciones (incluye la de prueba)
    app.get('/api/todaslasestaciones', estaciones.findAllStock);

    // busca un articulo por su id
    app.get('/api/estacion/:id', estaciones.findById);

    // Borra un articulo por su id
    app.delete('/api/estacionborrar/:id', estaciones.destroy);

    // Inserta un articulo nuevo
    app.post('/api/estacionnueva/', estaciones.create);

    // Actualiza un articulo por su id
    app.put('/api/estacionupdate/:id', estaciones.update);
}