//Configuración general
const config = require('../config/config')

// Importar opciones de Swagger
const swagger = require('../config/swagger')

// Requerimos Fastify framework y lo instanciamos
const fastify = require('fastify')({
    logger: true
})

// Registrar Swagger
fastify.register(require('fastify-swagger'), swagger.options)

// Módulos externos
const cors = require('fastify-cors');
const routes = require('fastify-routes');
const formbody = require('fastify-formbody');
const helmet = require('fastify-helmet');
const db = require('../config/integrations/mongodb');

// Conexión a la DB
db.connect();

//Registro de modulos fastify
fastify.register(helmet,{ hidePoweredBy: { setTo: 'PHP 2.2.0' } });
fastify.register(cors);
fastify.register(routes);
fastify.register(formbody);

//Routing fastify
require('../routes')(fastify);
  
// Servidor!
const start = async () => {
    try {
        await fastify.listen(config.PORT)
        fastify.swagger()
        fastify.log.info(`servidor en ${fastify.server.address().port}`)
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
        return;
    }
}

start()