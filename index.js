const express = require('express')
const app= new express;
const path = require('path')
const expressEdge = require('express-edge');
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/node-js-blog')
app.use(express.static('public')) // middlewares to inform that assets are present in public directory

app.use(expressEdge);

app.set('views',`${__dirname}/views`)

app.get('/',(req,res)=>{
  res.render('index')
})
app.get('/about',(req,res)=>{
  res.render('about')
})
app.get('/post',(req,res)=>{
  res.render('post')
})
app.get('/contact',(req,res)=>{
  res.render('contact')
})
app.listen(4000,()=>{


console.log('App is listening to port 4000');

})
