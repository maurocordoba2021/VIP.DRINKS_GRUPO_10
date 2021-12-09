const fs = require('fs');


const logMiddleware =  (req, res, next) => {
     if (req){
     fs.appendFileSync( 'log.txt','Se ingresó en la página ' + req.url + '\n');
    }
    next();
}

module.exports = logMiddleware;
