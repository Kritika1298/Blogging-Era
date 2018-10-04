const mongoose =require('mongoose')

const Post = require('./database/models/post')

mongoose.connect('mongodb://localhost/node-js-test-blog') // database connection

/*Post.create({      //creating post for collection "Post" with the given data
    title: 'My First Blog Post',
    description:'Blog Post',
    content:'Lorem ipsum'

},(error,post)=>{

  console.log(error,post)
})
Post.create({      //creating post for collection "Post" with the given data
    title: 'My Second Blog Post',
    description:'Blog Post',
    content:'Lorem ipsum'

},(error,post)=>{

  console.log(error,post)
})
Post.findById("5bb661076a4107146c344f29",(error,post)=>{
  console.log(error,post)
})*/
Post.findByIdAndUpdate("5bb661076a4107146c344f29",{
  title: "My First Blog Post lorem ipsum"
},(error,post)=>{
  console.log(error,post)
})
