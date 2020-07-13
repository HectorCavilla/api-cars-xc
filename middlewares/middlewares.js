const config = require('../config/config');

module.exports = {
    isValidDomain : (req, res, done) => {
        if(config.DOMAIN_WHITE_LIST.includes(req.headers.origin || req.headers.host)){
            return done();
        }
        return res.send(404, {
            error : 'err-invalid-domain',
            origin : req.headers.origin || req.headers.host
        });
    }
};