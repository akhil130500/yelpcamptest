var express=require("express");
var app=express();
app.use(express.static("public"));
app.set("view engine","ejs");
app.get("/",function(req,res){
    res.render("home")
});
app.get("/posts",function(req,res){
    var posts = [
        {title: "post1" , author: "akhil"},
        {title: "post2" , author: "kishore"},
        {title: "post3" , author: "rani"}
        ];
        res.render("posts",{posts: posts});
});
app.get("/fallinlovewith/:thing",function(req,res){
    var thing=req.params.thing;
    res.render("love",{thingvar: thing});
});
app.listen(process.env.PORT,process.env.IP,function(){
    console.log("server has started");
}); 