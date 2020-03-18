const express = require('express');
const authMiddleware = require('../../app/middlewares/auth');

const router = express.Router();

router.use(authMiddleware);

router.get('/',(req, res)=>{

    res.send({ok: true});
})

module.exports = app => app.use('/projetos', router)