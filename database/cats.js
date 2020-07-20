var mongoose=require("mongoose");
mongoose.connect("mongodb://localhost/catapp");

var catSchema=new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

var Cat=mongoose.model("Cat",catSchema);
Cat.create({
    name: "snow",
    age: 15,
    temperament: "nice"
},function(err,cat){
    if(err)
    {
        console.log(err);
    }
    else{
        console.log(cat);
    }
});

Cat.find({},function(err,cats){
    if(err){
        console.log("Error");
        console.log(err);
    }
    else
    {
        console.log("All the cats");
        console.log(cats)
    }
})
