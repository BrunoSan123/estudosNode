const jwt = require('jsonwebtoken')
const authConfig = require('../../src/config/auth.json');


module.exports = (req, res, next) => {


const authHeader = req.headers.authorization;

if(!authHeader)
    return res.status(401).send({error: 'nenhum token foi providenciado'});

const partes = authHeader.split(' ');

if(!partes.lenght === 2)
    return res.status(401).send({error: 'Token error'});

const [scheme,token] = partes;

if(!/^Bearer$/i.test(scheme))
    return res.status(401).send({error: 'token mal formado'})

jwt.verify(token, authConfig.secret, (err,decoded) =>{

    if(err) return res.status(401).send({error: 'Token invalido'});

    req.userId = decoded.id;
    return next();
})

};