{"filter":false,"title":"campgrounds.js","tooltip":"/yelpcamp/v9/routes/campgrounds.js","undoManager":{"mark":3,"position":3,"stack":[[{"start":{"row":0,"column":0},"end":{"row":61,"column":24},"action":"remove","lines":["var express = require(\"express\");","var router  = express.Router();","var Campground = require(\"../models/campground\");","","//INDEX - show all campgrounds","router.get(\"/\", function(req, res){","    // Get all campgrounds from DB","    Campground.find({}, function(err, allCampgrounds){","       if(err){","           console.log(err);","       } else {","          res.render(\"campgrounds/index\",{campgrounds:allCampgrounds});","       }","    });","});","","//CREATE - add new campground to DB","router.post(\"/\",function(req, res){","    // get data from form and add to campgrounds array","    var name = req.body.name;","    var image = req.body.image;","    var desc = req.body.description;","    var newCampground = {name: name, image: image, description: desc}","    // Create a new campground and save to DB","    Campground.create(newCampground, function(err, newlyCreated){","        if(err){","            console.log(err);","        } else {","            //redirect back to campgrounds page","            res.redirect(\"/campgrounds\");","        }","    });","});","","//NEW - show form to create new campground","router.get(\"/new\",function(req, res){","   res.render(\"campgrounds/new\"); ","});","","// SHOW - shows more info about one campground","router.get(\"/:id\", function(req, res){","    //find the campground with provided ID","    Campground.findById(req.params.id).populate(\"comments\").exec(function(err, foundCampground){","        if(err){","            console.log(err);","        } else {","            console.log(foundCampground)","            //render show template with that campground","            res.render(\"campgrounds/show\", {campground: foundCampground});","        }","    });","});","","","//middleware","function isLoggedIn(req, res, next){","    if(req.isAuthenticated()){","        return next();","    }","    res.redirect(\"/login\");","}","module.exports = router;"],"id":2}],[{"start":{"row":0,"column":0},"end":{"row":61,"column":24},"action":"insert","lines":["var express = require(\"express\");","var router  = express.Router();","var Campground = require(\"../models/campground\");","","//INDEX - show all campgrounds","router.get(\"/\", function(req, res){","    // Get all campgrounds from DB","    Campground.find({}, function(err, allCampgrounds){","       if(err){","           console.log(err);","       } else {","          res.render(\"campgrounds/index\",{campgrounds:allCampgrounds});","       }","    });","});","","//CREATE - add new campground to DB","router.post(\"/\",isLoggedIn,function(req, res){","    // get data from form and add to campgrounds array","    var name = req.body.name;","    var image = req.body.image;","    var desc = req.body.description;","    var newCampground = {name: name, image: image, description: desc}","    // Create a new campground and save to DB","    Campground.create(newCampground, function(err, newlyCreated){","        if(err){","            console.log(err);","        } else {","            //redirect back to campgrounds page","            res.redirect(\"/campgrounds\");","        }","    });","});","","//NEW - show form to create new campground","router.get(\"/new\",isLoggedIn,function(req, res){","   res.render(\"campgrounds/new\"); ","});","","// SHOW - shows more info about one campground","router.get(\"/:id\", function(req, res){","    //find the campground with provided ID","    Campground.findById(req.params.id).populate(\"comments\").exec(function(err, foundCampground){","        if(err){","            console.log(err);","        } else {","            console.log(foundCampground)","            //render show template with that campground","            res.render(\"campgrounds/show\", {campground: foundCampground});","        }","    });","});","","","//middleware","function isLoggedIn(req, res, next){","    if(req.isAuthenticated()){","        return next();","    }","    res.redirect(\"/login\");","}","module.exports = router;"],"id":3}],[{"start":{"row":0,"column":0},"end":{"row":61,"column":24},"action":"remove","lines":["var express = require(\"express\");","var router  = express.Router();","var Campground = require(\"../models/campground\");","","//INDEX - show all campgrounds","router.get(\"/\", function(req, res){","    // Get all campgrounds from DB","    Campground.find({}, function(err, allCampgrounds){","       if(err){","           console.log(err);","       } else {","          res.render(\"campgrounds/index\",{campgrounds:allCampgrounds});","       }","    });","});","","//CREATE - add new campground to DB","router.post(\"/\",isLoggedIn,function(req, res){","    // get data from form and add to campgrounds array","    var name = req.body.name;","    var image = req.body.image;","    var desc = req.body.description;","    var newCampground = {name: name, image: image, description: desc}","    // Create a new campground and save to DB","    Campground.create(newCampground, function(err, newlyCreated){","        if(err){","            console.log(err);","        } else {","            //redirect back to campgrounds page","            res.redirect(\"/campgrounds\");","        }","    });","});","","//NEW - show form to create new campground","router.get(\"/new\",isLoggedIn,function(req, res){","   res.render(\"campgrounds/new\"); ","});","","// SHOW - shows more info about one campground","router.get(\"/:id\", function(req, res){","    //find the campground with provided ID","    Campground.findById(req.params.id).populate(\"comments\").exec(function(err, foundCampground){","        if(err){","            console.log(err);","        } else {","            console.log(foundCampground)","            //render show template with that campground","            res.render(\"campgrounds/show\", {campground: foundCampground});","        }","    });","});","","","//middleware","function isLoggedIn(req, res, next){","    if(req.isAuthenticated()){","        return next();","    }","    res.redirect(\"/login\");","}","module.exports = router;"],"id":4}],[{"start":{"row":0,"column":0},"end":{"row":67,"column":24},"action":"insert","lines":["var express = require(\"express\");","var router  = express.Router();","var Campground = require(\"../models/campground\");","","//INDEX - show all campgrounds","router.get(\"/\", function(req, res){","    // Get all campgrounds from DB","    Campground.find({}, function(err, allCampgrounds){","       if(err){","           console.log(err);","       } else {","          res.render(\"campgrounds/index\",{campgrounds:allCampgrounds});","       }","    });","});","","//CREATE - add new campground to DB","router.post(\"/\", isLoggedIn, function(req, res){","    // get data from form and add to campgrounds array","    var name = req.body.name;","    var image = req.body.image;","    var desc = req.body.description;","    var author = {","        id: req.user._id,","        username: req.user.username","    }","    var newCampground = {name: name, image: image, description: desc, author:author}","    // Create a new campground and save to DB","    Campground.create(newCampground, function(err, newlyCreated){","        if(err){","            console.log(err);","        } else {","            //redirect back to campgrounds page","            console.log(newlyCreated);","            res.redirect(\"/campgrounds\");","        }","    });","});","","//NEW - show form to create new campground","router.get(\"/new\", isLoggedIn, function(req, res){","   res.render(\"campgrounds/new\"); ","});","","// SHOW - shows more info about one campground","router.get(\"/:id\", function(req, res){","    //find the campground with provided ID","    Campground.findById(req.params.id).populate(\"comments\").exec(function(err, foundCampground){","        if(err){","            console.log(err);","        } else {","            console.log(foundCampground)","            //render show template with that campground","            res.render(\"campgrounds/show\", {campground: foundCampground});","        }","    });","});","","","//middleware","function isLoggedIn(req, res, next){","    if(req.isAuthenticated()){","        return next();","    }","    res.redirect(\"/login\");","}","","module.exports = router;"],"id":5}]]},"ace":{"folds":[],"scrolltop":670.5,"scrollleft":0,"selection":{"start":{"row":67,"column":24},"end":{"row":67,"column":24},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":46,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1594738521078,"hash":"47412b9519e07bfa4781dcf7697e9cb4cb3c4c6a"}