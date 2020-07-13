const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CarsSchema = new Schema({
  _id: mongoose.ObjectId,
  name: String,
  maker: String,
  car_type: String,
  price_mxn: Number,
  price_usd: Number,
  description_es: String,
  description_en: String,
  models: Array
},
{
  timestamps: true
});

module.exports = mongoose.model('cars', CarsSchema);