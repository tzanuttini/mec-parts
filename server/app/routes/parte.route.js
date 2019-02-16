module.exports = function (app) {
    const parte = require('../controllers/parte.controller');

    // Iniciar datos: add rubros del sistema
    app.get('/api/partes/iniciar', parte.init);

    // Trae todos los rubros
    app.get('/api/partes/', parte.findAll);

    // busca un rubro por su id
    app.get('/api/parte/:id', parte.findById);

    // Borra un rubro por su id
    app.delete('/api/parteborrar/:id', parte.destroy);

    // Inserta un articulo nuevo
    app.post('/api/partenueva/', parte.create);

    // Actualiza un articulo por su id
    app.put('/api/parteupdate/:id', parte.update);
}