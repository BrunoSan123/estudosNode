var express = require('express');
var mongoose = require('mongoose');
var pug = require('pug');
var bodyParser = require('body-parser')
var bcrypt = require('bcrypt');

var User = require('./models/User');

var db =mongoose.connect('mongodb:://localhost:27017/Speaker')

var app = express();

//setup
app.set('view engine', 'pug');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get('/', function(reqquest, response){

    response.render('index', {title: 'Home'});

});

app.get('/login', function(request,response){

    response.render('login', {title: 'login'})
})

app.post('/login', function(request,response){
    response.send(request.body)
})

app.get('/registro', function(request,response){

   response.render('registro', {title: 'resgistro'})
})

app.post('/registro', function(request,response){
    if(request.body.username && request.body.password){

        // registro
    
        User.create({
            username: request.body.username,
            password: request.body.password
        }, (error,user)=>{
            if(error){
                response.render('error',{
                    title: 'error',
                    error: 'Usuario não foi criado por alguma razão'
                });
            }else{
                response.send(user)
            }
        });
       }else{
           response.render('error', {title: 'error',error: 'Username e Senhas necessarios!'})
       }
    
})



app.listen(3000);