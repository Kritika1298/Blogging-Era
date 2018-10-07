const Post = require ('../database/models/post')
const path = require('path')
module.exports =(req,res)=>{

  const {image} = req.files

  image.mv(path.resolve(__dirname,'..','public/img', image.name),(error)=>{


      Post.create({
        //req.body,(error,post)=>{
          ...req.body,
          image: `/img/${image.name}`,
          author: req.session.userId

        },(error,post)=>{
      res.redirect("/");
      })
  })
}
