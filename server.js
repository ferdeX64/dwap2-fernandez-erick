const express=require('express');
const app=express();
const hbs = require('hbs');
const port=process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');
require('./hbs/helpers');

app.get('/',(req, res)=>{
    res.render('index',{
        
    });
});
app.listen(3000,()=>{
    console.log(`Escuchando peticiones en el puerto ${port}`);
});
/*
app.get('/',function(req,res){
    //res.send('Hello world');
    
    let salida={
        nombre:'Juan',
        edad:23,
        url:req.url
    }
    res.send(salida);
});*/
/*
app.get('/data',function(req,res){
    res.send('Hello world');
})*/