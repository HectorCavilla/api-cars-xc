// Dependencias externas
const boom = require('boom')

// Obtenemos el modelo
const Car = require('../models/Car')

// Obtenemos todos los carros
exports.getCars = async (req, reply) => {
  try {
    const cars = await Car.find()
    return cars
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Obtenemos un solo carro por ID
exports.getSingleCar = async (req, reply) => {
  try {
    const id = req.params.id

    const car = await Car.findById(id)
    return car

  } catch (err) {
    throw boom.boomify(err)
  }
}

/**
 * Otros métodos para completar la API (No fueron requeridos pero se disponen)
 */
// Agregar nuevo carro
exports.addCar = async (req, reply) => {
  try {
    const car = new Car(req.body)
    return car.save()
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Actualizar carro
exports.updateCar = async (req, reply) => {
  try {
    const id = req.params.id
    const car = req.body
    const { ...updateData } = car
    const update = await Car.findByIdAndUpdate(id, updateData, { new: true })
    return update
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Eliminar carro
exports.deleteCar = async (req, reply) => {
  try {
    const id = req.params.id
    const car = await Car.findByIdAndRemove(id)
    return car
  } catch (err) {
    throw boom.boomify(err)
  }
}