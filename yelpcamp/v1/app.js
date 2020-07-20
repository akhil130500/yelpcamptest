var express=require("express");
var app=express();
var bodyparser=require("body-parser");
app.use(bodyparser.urlencoded({extended: true}));
app.set("view engine","ejs");
 var campgrounds=[
        {name: "creek", image: "https://images.pexels.com/photos/1687845/pexels-photo-1687845.jpeg?auto=compress&cs=tinysrgb&h=350"},
        {name: "Hill", image: "https://images.pexels.com/photos/1061640/pexels-photo-1061640.jpeg?auto=compress&cs=tinysrgb&h=350"},
        {name: "Rest", image: "https://images.pexels.com/photos/2398220/pexels-photo-2398220.jpeg?auto=compress&cs=tinysrgb&h=350"},
        {name: "creek", image: "https://images.pexels.com/photos/1687845/pexels-photo-1687845.jpeg?auto=compress&cs=tinysrgb&h=350"},
        {name: "Hill", image: "https://images.pexels.com/photos/1061640/pexels-photo-1061640.jpeg?auto=compress&cs=tinysrgb&h=350"},
        {name: "Rest", image: "https://images.pexels.com/photos/2398220/pexels-photo-2398220.jpeg?auto=compress&cs=tinysrgb&h=350"}
        
        ]
app.get("/",function(req,res){
    res.render("landing")
});
app.get("/campgrounds",function(req,res){
        res.render("campgrounds",{campgrounds: campgrounds});
}); 
app.post("/campgrounds",function(req,res){
    var name=req.body.name;
    var image=req.body.image;
    var newcampground={name: name,image: image}
    campgrounds.push(newcampground);
    res.redirect("/campgrounds");
});
app.get("/campgrounds/new",function(req,res){
    res.render("new");
});
app.listen(process.env.PORT,process.env.IP,function(){
    console.log("server has started");
}); 