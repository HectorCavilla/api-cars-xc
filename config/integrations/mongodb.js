const config = require('../config');
const mongoose = require('../../src/node_modules/mongoose');

module.exports = class DB {
    static connect(){
        return mongoose.connect(config.MONGODB_URI, {
            promiseLibrary: global.Promise,
            useNewUrlParser: true
        });
    } 
}