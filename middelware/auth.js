const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  
    try{
        const token = req.headers.authorization.split(' ')[1];
        console.log( req.headers.authorization);
        const decodedToken = jwt.verify(token, 'RAONDOM_TOKEN_RANDAL');
        const userId= decodedToken.userId
        req.auth = {
            userId: userId
        }
    }
    catch{
        res.status(401).json({message:decodedToken})
    }
}
