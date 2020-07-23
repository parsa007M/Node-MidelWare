
var express = require('express');
var router = express.Router();

var controller = require('../controller/ElectronicController');

// ! =============================================

// ! 2- MiddleWare : Router Level MiddleWare


router.use(function(req,res,next){
    req.test = 'Hello';


    req.isAuthenticated = true;

    next();
});


// ! =============================================

router.get('/', controller.index);
router.get('/computer', controller.computer); 

module.exports = router;

