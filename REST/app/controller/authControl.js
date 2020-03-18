const express = require('express');
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authConfig = require('../../src/config/auth');
const crypto = require('crypto')
const mailer =require('../../modules/mailer.js')

const router = express.Router();


router.post('/registro', async(req,res) =>{


    const {email} = req.body;

    try{

        if(await User.findOne({email}))
            return res.status(400).send({error: 'Usuário já está cadastrado'});
        const user = await  User.create(req.body);

        user.senha = undefined;

        return res.send({
            user,
            token: genrandoToken({id: user.id}),
        
        });

    }catch(err){
        return res.status(400).send({error: 'Cadastro falhou por algum motivo!'});


    }

});

function genrandoToken(parametro = {}){

    return  jwt.sign(parametro, authConfig.secret, {
        expiresIn: 86400,

    });

}

router.post('/autenticacao', async(req, res)=>{
    const {email, senha} = req.body;

    const user = await User.findOne({email}).select('+senha');

    if(!user)
        return res.status(400).send({error: "Usuário não encontrado"})
    
    if(!await bcrypt.compare(senha, user.senha))
        return  res.status(400).send({error: 'Senha invalida'})
    
    

    user.senha = undefined;

    const token = jwt.sign({id: user.id},authConfig.secret, {
        expiresIn: 86400,

    } );

    res.send({
        user, 
        token: genrandoToken({id: user.id}),
    
    });
});

router.post('/forgot_password', async(req,res)=>{
    const {email} = req.body;

    try {

        const user = await User.findOne({email});
        if(!user){
            return res.status(400).send({error: 'Usuário não encontrado'})
        }
        const token =crypto.randomBytes(20).toString('hex');
        const now =new Date();
        now.setHours(now.getHours()+1);

        await User.findByIdAndUpdate(user.id,{
          '$set':{
              passwordResetToken: token,
              passWordResetExpires: now,
          }

        });

        mailer.sendMail({
            to: email,
            from: 'Bruno@supermail.com',
            template: 'auth/forgot',
            context: {token},

        }, (err)=>{
            if(err)
                return res.status(400).send({error:'Não foi envida a senha esquecida'})
        })

        return res.send(200);
    } catch (error) {
        res.status(400).send({error: "Error_on_FORGOT_PASSWORD, tente de novo"})
        
    }
})

module.exports = app => app.use('/auth', router);