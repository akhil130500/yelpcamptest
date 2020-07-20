var express=require("express");
var app=express();
app.get("/",function(req,res){
    res.send("Hi there,welcome to my assignment");
});
 app.get("/speak/:animal/",function(req,res){
    var x=req.params.animal;
    
    var sounds={
        pig: "oink",
        cow: "Moo",
        dog: "bow bow",
        cat: "meow"
    }
    var sound=sounds[x];
    res.send("The "+ x +" says "+ sound);
});
app.get("/repeat/:message/:times",function(req,res){
    var message=req.params.message;
    var times=Number(req.params.times);var result="";
    for(var i=0;i<times;i++)
    {
        result=result+message+" ";
    }
    res.send(result);
}); 

app.get("*",function(req,res){
    res.send("Not selected correct");
});
app.listen(process.env.PORT,process.env.IP,function(){
    console.log("server has started");
}); 