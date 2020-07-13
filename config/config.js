module.exports = {
    PORT : process.env.PORT || 3001,
    MONGODB_URI : process.env.MONGODB_URI || 'mongodb://localhost:27017/cars-fullstack-xcaret',
    DOMAIN_WHITE_LIST : ['http://localhost:3001', 'localhost:3001', 'http://localhost:3000', 'localhost:3000']
}