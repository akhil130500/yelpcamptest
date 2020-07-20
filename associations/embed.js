
var mongoose=require("mongoose");


mongoose.connect("mongodb://localhost:27017/blog_demo",{useNewUrlParser: true, useUnifiedTopology: true});


var postschema=new mongoose.Schema({
   title: String,
   content: String
});


var userschema=new mongoose.Schema({
   email: String,
   name: String,
   posts: [postschema]
});
var User=mongoose.model("User",userschema);


var Post=mongoose.model("Post",postschema);

User.findOne({name:"jhansi"},function(err,user){
    if(err){
        console.log(err);
    }else{
        user.posts.push({
    title:"AIMS",
    content: "Doctors are better from aims"
});
user.save(function(err,user){
    if(err){
        console.log(err);
    }else{
        console.log(user);
    }
});


    }
});