const middleware = require('../middlewares/middlewares');

// Importamos en controlador
const carController = require('../src/controllers/carController')

module.exports = fastify => {
  fastify.get('/api/cars', {preValidation : middleware.isValidDomain}, carController.getCars);
  fastify.get('/api/cars/:id', {preValidation : middleware.isValidDomain}, carController.getSingleCar);

  /**
   * Otras rutas para completar el CRUD que (No fueron requeridos pero se disponen)
   */
  //fastify.post('/api/cars', carController.addCar);
  //fastify.put('/api/cars/:id', carController.updateCar);
  //fastify.delete('/api/cars/:id', carController.deleteCar);
};