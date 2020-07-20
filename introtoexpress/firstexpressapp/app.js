var express=require("express");
var app=express();
app.get("/",function(req,res){
    res.send("Hi there");
});
app.get("/bye",function(req,res){
    res.send("Good bye");
});
app.get("/r/:subredit",function(req,res){
    var x=(req.params.subredit);
    res.send("welcome to the "+ x +" subredit");
});
app.get("/r/:subredit/comments/:id/:title/",function(req,res){
    res.send("including comments");
});
app.get("*",function(req,res){
    res.send("No it is not fine");
});


app.listen(process.env.PORT,process.env.IP,function(){
    console.log("server has started");
}); 