module.exports = function (app) {
    const operario = require('../controllers/operario.controller');

    // Iniciar datos: add rubros del sistema
    app.get('/api/operarios/iniciar', operario.init);

    // Trae todos los rubros
    app.get('/api/operarios/', operario.findAll);

    // busca un rubro por su id
    app.get('/api/operario/:id', operario.findById);

    // Borra un rubro por su id
    app.delete('/api/operarioborrar/:id', operario.destroy);

    // Inserta un articulo nuevo
    app.post('/api/operarionuevo/', operario.create);

    // Actualiza un articulo por su id
    app.put('/api/operarioupdate/:id', operario.update);
}