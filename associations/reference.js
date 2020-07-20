
var mongoose=require("mongoose");


mongoose.connect("mongodb://localhost:27017/blog_demo_2",{useNewUrlParser: true, useUnifiedTopology: true});

var Post=require("./models/post")


var User=require("./models/user");
Post.create({
    title: "How to cook",
    content: "Tasty is important"
 }, function(err,post){
    User.findOne({email:"akhilvegunta@gmail.com"},function(err,founduser){
        if(err)
        {
            console.log(err);
        }else{
            founduser.posts.push(post);
            founduser.save(function(err,data){
                if(err){
                    console.log(err);
                }else{
                    console.log(data);
                }
            });
        }
    });
});

