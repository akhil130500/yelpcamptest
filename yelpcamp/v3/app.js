var express=require("express");
var app=express();
var bodyparser=require("body-parser");
var mongoose=require("mongoose");

var Campground=require("./models/campground");
var seeddb=require("./seeds");

seeddb();

mongoose.connect("mongodb://localhost:27017/yelp_camp_v3",{useNewUrlParser: true, useUnifiedTopology: true});


app.use(bodyparser.urlencoded({extended: true}));
app.set("view engine","ejs");




/* / */
app.get("/",function(req,res){
    res.render("landing")
});

/* /campgrounds */
app.get("/campgrounds",function(req,res){
     Campground.find({},function(err,allcampground){
         if(err){
             console.log(err);
         }else{
              res.render("index",{campgrounds: allcampground});
         }
     })
       
}); 

/* /campgrounds post */
app.post("/campgrounds",function(req,res){
    var name=req.body.name;
    var image=req.body.image;
    var desc=req.body.description;
    var newcampground={name: name,image: image,description: desc}
    Campground.create(newcampground,function(err,newlycreated){
        if(err){
            console.log(err);
        }else{
             res.redirect("/campgrounds");
        }
    });
});

/* /campgrounds new */
app.get("/campgrounds/new",function(req,res){
    res.render("new");
});

/* /campgrounds id show route*/
app.get("/campgrounds/:id",function(req,res){
    Campground.findById(req.params.id).populate("comments").exec(function(err,foundcampground){
        if(err)
        {
            console.log(err);
        }
        else
        {
            res.render("show",{campground: foundcampground})
        }
    });
});




app.listen(process.env.PORT,process.env.IP,function(){
    console.log("server has started");
}); 