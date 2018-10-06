const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({

  title:String,
  subtitle:String,
  content:String,
  username:String,
  image: String,
  createdAt:{

  type: Date,
  default:new Date() //get the instance of the Javascript date
  }
})

const Post= mongoose.model('Post',PostSchema)

module.exports = Post
