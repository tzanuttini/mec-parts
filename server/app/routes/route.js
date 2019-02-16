module.exports = function (app) {
  // aca voy agregando comodamente las rutas por modelo
  require('./usuario.route')(app);
  require('./estacion.route')(app);
  require('./parte.route')(app);
  require('./operario.route')(app);
  require('./maquina.route')(app);
  require('./operacion.route')(app);
}
