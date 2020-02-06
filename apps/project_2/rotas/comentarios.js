const express = require('express');
const router = express.Router();

router.get('/comentarios/:postid',(req,res)=>{
    res.json({
        
        conteudo: 'Muito lindo',
        autor: 'bruno barreto'
    })
})

module.exports =router;