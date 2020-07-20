{"filter":false,"title":"index.js","tooltip":"/yelpcamp/v7/routes/index.js","ace":{"folds":[],"scrolltop":576.5,"scrollleft":0,"selection":{"start":{"row":57,"column":0},"end":{"row":57,"column":0},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":29,"state":"start","mode":"ace/mode/javascript"}},"hash":"ea812e11bc1a06d43244797d07cfce86390862f6","undoManager":{"mark":40,"position":40,"stack":[[{"start":{"row":0,"column":0},"end":{"row":45,"column":3},"action":"insert","lines":["app.get(\"/\", function(req, res){","    res.render(\"landing\");","});","","","","","//  ===========","// AUTH ROUTES","//  ===========","","// show register form","app.get(\"/register\", function(req, res){","   res.render(\"register\"); ","});","//handle sign up logic","app.post(\"/register\", function(req, res){","    var newUser = new User({username: req.body.username});","    User.register(newUser, req.body.password, function(err, user){","        if(err){","            console.log(err);","            return res.render(\"register\");","        }","        passport.authenticate(\"local\")(req, res, function(){","           res.redirect(\"/campgrounds\"); ","        });","    });","});","","// show login form","app.get(\"/login\", function(req, res){","   res.render(\"login\"); ","});","// handling login logic","app.post(\"/login\", passport.authenticate(\"local\", ","    {","        successRedirect: \"/campgrounds\",","        failureRedirect: \"/login\"","    }), function(req, res){","});","","// logic route","app.get(\"/logout\", function(req, res){","   req.logout();","   res.redirect(\"/campgrounds\");","});"],"id":1}],[{"start":{"row":45,"column":3},"end":{"row":46,"column":0},"action":"insert","lines":["",""],"id":2},{"start":{"row":46,"column":0},"end":{"row":47,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":47,"column":0},"end":{"row":54,"column":0},"action":"insert","lines":["","function isLoggedIn(req, res, next){","    if(req.isAuthenticated()){","        return next();","    }","    res.redirect(\"/login\");","}",""],"id":3}],[{"start":{"row":0,"column":0},"end":{"row":1,"column":0},"action":"insert","lines":["",""],"id":4},{"start":{"row":1,"column":0},"end":{"row":2,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":0,"column":0},"end":{"row":1,"column":28},"action":"insert","lines":["var express=require(\"express\");","var router=express.Router();"],"id":5}],[{"start":{"row":3,"column":2},"end":{"row":3,"column":3},"action":"remove","lines":["p"],"id":6},{"start":{"row":3,"column":1},"end":{"row":3,"column":2},"action":"remove","lines":["p"]},{"start":{"row":3,"column":0},"end":{"row":3,"column":1},"action":"remove","lines":["a"]}],[{"start":{"row":3,"column":0},"end":{"row":3,"column":1},"action":"insert","lines":["r"],"id":7},{"start":{"row":3,"column":1},"end":{"row":3,"column":2},"action":"insert","lines":["o"]},{"start":{"row":3,"column":2},"end":{"row":3,"column":3},"action":"insert","lines":["u"]},{"start":{"row":3,"column":3},"end":{"row":3,"column":4},"action":"insert","lines":["t"]},{"start":{"row":3,"column":4},"end":{"row":3,"column":5},"action":"insert","lines":["e"]},{"start":{"row":3,"column":5},"end":{"row":3,"column":6},"action":"insert","lines":["r"]}],[{"start":{"row":15,"column":2},"end":{"row":15,"column":3},"action":"remove","lines":["p"],"id":8},{"start":{"row":15,"column":1},"end":{"row":15,"column":2},"action":"remove","lines":["p"]},{"start":{"row":15,"column":0},"end":{"row":15,"column":1},"action":"remove","lines":["a"]}],[{"start":{"row":15,"column":0},"end":{"row":15,"column":1},"action":"insert","lines":["r"],"id":9},{"start":{"row":15,"column":1},"end":{"row":15,"column":2},"action":"insert","lines":["o"]},{"start":{"row":15,"column":2},"end":{"row":15,"column":3},"action":"insert","lines":["u"]},{"start":{"row":15,"column":3},"end":{"row":15,"column":4},"action":"insert","lines":["t"]},{"start":{"row":15,"column":4},"end":{"row":15,"column":5},"action":"insert","lines":["e"]},{"start":{"row":15,"column":5},"end":{"row":15,"column":6},"action":"insert","lines":["r"]}],[{"start":{"row":19,"column":2},"end":{"row":19,"column":3},"action":"remove","lines":["p"],"id":10},{"start":{"row":19,"column":1},"end":{"row":19,"column":2},"action":"remove","lines":["p"]},{"start":{"row":19,"column":0},"end":{"row":19,"column":1},"action":"remove","lines":["a"]}],[{"start":{"row":19,"column":0},"end":{"row":19,"column":1},"action":"insert","lines":["r"],"id":11},{"start":{"row":19,"column":1},"end":{"row":19,"column":2},"action":"insert","lines":["o"]},{"start":{"row":19,"column":2},"end":{"row":19,"column":3},"action":"insert","lines":["u"]},{"start":{"row":19,"column":3},"end":{"row":19,"column":4},"action":"insert","lines":["t"]},{"start":{"row":19,"column":4},"end":{"row":19,"column":5},"action":"insert","lines":["e"]},{"start":{"row":19,"column":5},"end":{"row":19,"column":6},"action":"insert","lines":["r"]}],[{"start":{"row":33,"column":2},"end":{"row":33,"column":3},"action":"remove","lines":["p"],"id":12},{"start":{"row":33,"column":1},"end":{"row":33,"column":2},"action":"remove","lines":["p"]},{"start":{"row":33,"column":0},"end":{"row":33,"column":1},"action":"remove","lines":["a"]}],[{"start":{"row":33,"column":0},"end":{"row":33,"column":1},"action":"insert","lines":["r"],"id":13},{"start":{"row":33,"column":1},"end":{"row":33,"column":2},"action":"insert","lines":["o"]},{"start":{"row":33,"column":2},"end":{"row":33,"column":3},"action":"insert","lines":["u"]},{"start":{"row":33,"column":3},"end":{"row":33,"column":4},"action":"insert","lines":["t"]},{"start":{"row":33,"column":4},"end":{"row":33,"column":5},"action":"insert","lines":["e"]},{"start":{"row":33,"column":5},"end":{"row":33,"column":6},"action":"insert","lines":["r"]}],[{"start":{"row":37,"column":2},"end":{"row":37,"column":3},"action":"remove","lines":["p"],"id":14},{"start":{"row":37,"column":1},"end":{"row":37,"column":2},"action":"remove","lines":["p"]},{"start":{"row":37,"column":0},"end":{"row":37,"column":1},"action":"remove","lines":["a"]}],[{"start":{"row":37,"column":0},"end":{"row":37,"column":1},"action":"insert","lines":["r"],"id":15},{"start":{"row":37,"column":1},"end":{"row":37,"column":2},"action":"insert","lines":["o"]},{"start":{"row":37,"column":2},"end":{"row":37,"column":3},"action":"insert","lines":["u"]},{"start":{"row":37,"column":3},"end":{"row":37,"column":4},"action":"insert","lines":["t"]},{"start":{"row":37,"column":4},"end":{"row":37,"column":5},"action":"insert","lines":["e"]},{"start":{"row":37,"column":5},"end":{"row":37,"column":6},"action":"insert","lines":["r"]}],[{"start":{"row":45,"column":2},"end":{"row":45,"column":3},"action":"remove","lines":["p"],"id":16},{"start":{"row":45,"column":1},"end":{"row":45,"column":2},"action":"remove","lines":["p"]},{"start":{"row":45,"column":0},"end":{"row":45,"column":1},"action":"remove","lines":["a"]}],[{"start":{"row":45,"column":0},"end":{"row":45,"column":1},"action":"insert","lines":["r"],"id":17},{"start":{"row":45,"column":1},"end":{"row":45,"column":2},"action":"insert","lines":["o"]},{"start":{"row":45,"column":2},"end":{"row":45,"column":3},"action":"insert","lines":["u"]},{"start":{"row":45,"column":3},"end":{"row":45,"column":4},"action":"insert","lines":["t"]},{"start":{"row":45,"column":4},"end":{"row":45,"column":5},"action":"insert","lines":["e"]},{"start":{"row":45,"column":5},"end":{"row":45,"column":6},"action":"insert","lines":["r"]}],[{"start":{"row":56,"column":1},"end":{"row":57,"column":0},"action":"insert","lines":["",""],"id":18},{"start":{"row":57,"column":0},"end":{"row":58,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":58,"column":0},"end":{"row":58,"column":22},"action":"insert","lines":["module.exports=router;"],"id":19}],[{"start":{"row":2,"column":0},"end":{"row":2,"column":1},"action":"insert","lines":["v"],"id":20},{"start":{"row":2,"column":1},"end":{"row":2,"column":2},"action":"insert","lines":["a"]},{"start":{"row":2,"column":2},"end":{"row":2,"column":3},"action":"insert","lines":["r"]}],[{"start":{"row":2,"column":3},"end":{"row":2,"column":4},"action":"insert","lines":[" "],"id":21},{"start":{"row":2,"column":4},"end":{"row":2,"column":5},"action":"insert","lines":["p"]},{"start":{"row":2,"column":5},"end":{"row":2,"column":6},"action":"insert","lines":["a"]},{"start":{"row":2,"column":6},"end":{"row":2,"column":7},"action":"insert","lines":["s"]},{"start":{"row":2,"column":7},"end":{"row":2,"column":8},"action":"insert","lines":["s"]},{"start":{"row":2,"column":8},"end":{"row":2,"column":9},"action":"insert","lines":["p"]},{"start":{"row":2,"column":9},"end":{"row":2,"column":10},"action":"insert","lines":["o"]},{"start":{"row":2,"column":10},"end":{"row":2,"column":11},"action":"insert","lines":["r"]}],[{"start":{"row":2,"column":11},"end":{"row":2,"column":12},"action":"insert","lines":["t"],"id":22},{"start":{"row":2,"column":12},"end":{"row":2,"column":13},"action":"insert","lines":["="]},{"start":{"row":2,"column":13},"end":{"row":2,"column":14},"action":"insert","lines":["r"]},{"start":{"row":2,"column":14},"end":{"row":2,"column":15},"action":"insert","lines":["e"]},{"start":{"row":2,"column":15},"end":{"row":2,"column":16},"action":"insert","lines":["q"]},{"start":{"row":2,"column":16},"end":{"row":2,"column":17},"action":"insert","lines":["u"]},{"start":{"row":2,"column":17},"end":{"row":2,"column":18},"action":"insert","lines":["i"]}],[{"start":{"row":2,"column":18},"end":{"row":2,"column":19},"action":"insert","lines":["r"],"id":23},{"start":{"row":2,"column":19},"end":{"row":2,"column":20},"action":"insert","lines":["e"]}],[{"start":{"row":2,"column":20},"end":{"row":2,"column":22},"action":"insert","lines":["()"],"id":24}],[{"start":{"row":2,"column":21},"end":{"row":2,"column":23},"action":"insert","lines":["\"\""],"id":25}],[{"start":{"row":2,"column":22},"end":{"row":2,"column":23},"action":"insert","lines":["p"],"id":26},{"start":{"row":2,"column":23},"end":{"row":2,"column":24},"action":"insert","lines":["a"]},{"start":{"row":2,"column":24},"end":{"row":2,"column":25},"action":"insert","lines":["s"]},{"start":{"row":2,"column":25},"end":{"row":2,"column":26},"action":"insert","lines":["s"]},{"start":{"row":2,"column":26},"end":{"row":2,"column":27},"action":"insert","lines":["p"]},{"start":{"row":2,"column":27},"end":{"row":2,"column":28},"action":"insert","lines":["o"]},{"start":{"row":2,"column":28},"end":{"row":2,"column":29},"action":"insert","lines":["e"]},{"start":{"row":2,"column":29},"end":{"row":2,"column":30},"action":"insert","lines":["r"]}],[{"start":{"row":2,"column":28},"end":{"row":2,"column":29},"action":"remove","lines":["e"],"id":27}],[{"start":{"row":2,"column":29},"end":{"row":2,"column":30},"action":"insert","lines":["t"],"id":28}],[{"start":{"row":2,"column":32},"end":{"row":2,"column":33},"action":"insert","lines":[";"],"id":29}],[{"start":{"row":2,"column":33},"end":{"row":3,"column":0},"action":"insert","lines":["",""],"id":30}],[{"start":{"row":3,"column":0},"end":{"row":3,"column":41},"action":"insert","lines":["var Comment=require(\"../models/comment\");"],"id":31}],[{"start":{"row":3,"column":10},"end":{"row":3,"column":11},"action":"remove","lines":["t"],"id":32},{"start":{"row":3,"column":9},"end":{"row":3,"column":10},"action":"remove","lines":["n"]},{"start":{"row":3,"column":8},"end":{"row":3,"column":9},"action":"remove","lines":["e"]},{"start":{"row":3,"column":7},"end":{"row":3,"column":8},"action":"remove","lines":["m"]},{"start":{"row":3,"column":6},"end":{"row":3,"column":7},"action":"remove","lines":["m"]},{"start":{"row":3,"column":5},"end":{"row":3,"column":6},"action":"remove","lines":["o"]},{"start":{"row":3,"column":4},"end":{"row":3,"column":5},"action":"remove","lines":["C"]}],[{"start":{"row":3,"column":4},"end":{"row":3,"column":5},"action":"insert","lines":["U"],"id":33},{"start":{"row":3,"column":5},"end":{"row":3,"column":6},"action":"insert","lines":["s"]},{"start":{"row":3,"column":6},"end":{"row":3,"column":7},"action":"insert","lines":["e"]},{"start":{"row":3,"column":7},"end":{"row":3,"column":8},"action":"insert","lines":["r"]}],[{"start":{"row":3,"column":34},"end":{"row":3,"column":35},"action":"remove","lines":["t"],"id":34},{"start":{"row":3,"column":33},"end":{"row":3,"column":34},"action":"remove","lines":["n"]},{"start":{"row":3,"column":32},"end":{"row":3,"column":33},"action":"remove","lines":["e"]},{"start":{"row":3,"column":31},"end":{"row":3,"column":32},"action":"remove","lines":["m"]},{"start":{"row":3,"column":30},"end":{"row":3,"column":31},"action":"remove","lines":["m"]},{"start":{"row":3,"column":29},"end":{"row":3,"column":30},"action":"remove","lines":["o"]},{"start":{"row":3,"column":28},"end":{"row":3,"column":29},"action":"remove","lines":["c"]}],[{"start":{"row":3,"column":28},"end":{"row":3,"column":29},"action":"insert","lines":["u"],"id":35},{"start":{"row":3,"column":29},"end":{"row":3,"column":30},"action":"insert","lines":["s"]},{"start":{"row":3,"column":30},"end":{"row":3,"column":31},"action":"insert","lines":["e"]},{"start":{"row":3,"column":31},"end":{"row":3,"column":32},"action":"insert","lines":["r"]}],[{"start":{"row":3,"column":35},"end":{"row":4,"column":0},"action":"insert","lines":["",""],"id":36},{"start":{"row":4,"column":0},"end":{"row":5,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":0,"column":0},"end":{"row":62,"column":0},"action":"remove","lines":["var express=require(\"express\");","var router=express.Router();","var passport=require(\"passport\");","var User=require(\"../models/user\");","","","router.get(\"/\", function(req, res){","    res.render(\"landing\");","});","","","","","//  ===========","// AUTH ROUTES","//  ===========","","// show register form","router.get(\"/register\", function(req, res){","   res.render(\"register\"); ","});","//handle sign up logic","router.post(\"/register\", function(req, res){","    var newUser = new User({username: req.body.username});","    User.register(newUser, req.body.password, function(err, user){","        if(err){","            console.log(err);","            return res.render(\"register\");","        }","        passport.authenticate(\"local\")(req, res, function(){","           res.redirect(\"/campgrounds\"); ","        });","    });","});","","// show login form","router.get(\"/login\", function(req, res){","   res.render(\"login\"); ","});","// handling login logic","router.post(\"/login\", passport.authenticate(\"local\", ","    {","        successRedirect: \"/campgrounds\",","        failureRedirect: \"/login\"","    }), function(req, res){","});","","// logic route","router.get(\"/logout\", function(req, res){","   req.logout();","   res.redirect(\"/campgrounds\");","});","","","function isLoggedIn(req, res, next){","    if(req.isAuthenticated()){","        return next();","    }","    res.redirect(\"/login\");","}","","module.exports=router;",""],"id":37}],[{"start":{"row":0,"column":0},"end":{"row":56,"column":24},"action":"insert","lines":["var express = require(\"express\");","var router  = express.Router();","var passport = require(\"passport\");","var User = require(\"../models/user\");","","//root route","router.get(\"/\", function(req, res){","    res.render(\"landing\");","});","","// show register form","router.get(\"/register\", function(req, res){","   res.render(\"register\"); ","});","","//handle sign up logic","router.post(\"/register\", function(req, res){","    var newUser = new User({username: req.body.username});","    User.register(newUser, req.body.password, function(err, user){","        if(err){","            console.log(err);","            return res.render(\"register\");","        }","        passport.authenticate(\"local\")(req, res, function(){","           res.redirect(\"/campgrounds\"); ","        });","    });","});","","//show login form","router.get(\"/login\", function(req, res){","   res.render(\"login\"); ","});","","//handling login logic","router.post(\"/login\", passport.authenticate(\"local\", ","    {","        successRedirect: \"/campgrounds\",","        failureRedirect: \"/login\"","    }), function(req, res){","});","","// logout route","router.get(\"/logout\", function(req, res){","   req.logout();","   res.redirect(\"/campgrounds\");","});","","//middleware","function isLoggedIn(req, res, next){","    if(req.isAuthenticated()){","        return next();","    }","    res.redirect(\"/login\");","}","","module.exports = router;"],"id":38}],[{"start":{"row":56,"column":24},"end":{"row":56,"column":25},"action":"insert","lines":["j"],"id":39},{"start":{"row":56,"column":25},"end":{"row":56,"column":26},"action":"insert","lines":["j"]}],[{"start":{"row":56,"column":25},"end":{"row":56,"column":26},"action":"remove","lines":["j"],"id":40},{"start":{"row":56,"column":24},"end":{"row":56,"column":25},"action":"remove","lines":["j"]}],[{"start":{"row":56,"column":24},"end":{"row":57,"column":0},"action":"insert","lines":["",""],"id":41}]]},"timestamp":1594656972523}