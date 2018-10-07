const express = require('express')
const app= new express;
const expressEdge = require('express-edge');
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload')
const expressSession =  require('express-session')
const connectMongo = require('connect-mongo')


const createPostController = require('./controllers/createPost')
const homePageController = require('./controllers/homePage')
const storePostController = require ('./controllers/storePost')
const getPostController = require('./controllers/getPost')
const createUserController = require('./controllers/createUser')
const storeUserController = require('./controllers/storeUser')
const loginController= require ('./controllers/login')
const loginUserController= require ('./controllers/loginUser')

mongoose.connect('mongodb://localhost/node-js-blog')
app.use(expressEdge);

app.use(express.static('public')) // middlewares to inform that assets are present in public directory

const mongoStore = connectMongo(expressSession)
app.use(expressSession({

  secret:'secret',
  store: new mongoStore({
    mongooseConnection:mongoose.connection
  })
}))

app.set('views',`${__dirname}/views`)
app.use(fileUpload())

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({extended:true}))


const storePost = require('./middleware/storePost')

app.use('/posts/store',storePost);



app.get("/",homePageController);

app.get('/posts/new',createPostController);

app.post('/posts/store',storePostController);

app.get("/post/:id",getPostController);
app.get('/auth/register',createUserController)

app.post('/users/register',storeUserController)
app.get('/auth/login',loginController)
app.post('/users/login',loginUserController)



app.listen(4000,()=>{


console.log('App is listening to port 4000');

})
