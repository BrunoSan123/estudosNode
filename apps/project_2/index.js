const express = require('express');
const bodyParser = require('body-parser');
const rotas = require('./rotas');
const port = 3001;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.get('/', (req, res)=>{
    res.send('funciona!!')
})

app.use('/api',rotas )
app.use(express.static(__dirname+'/client'))



app.listen(port,()=>{
    console.log("servidor executando na porta 3001");
})