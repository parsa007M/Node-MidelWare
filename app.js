// ! MIDDLEWARE: 
//!=============

/* 




*/

var express = require('express');
var app = express();
var path = require('path');
var routeElectronic = require('./app_server/router/ElectronicRouter');

app.use('/public', express.static(path.join(__dirname,'public')))

// ! =====================================

// ! My Own MiddleWare: GLOBAL!

app.use(function(req, res,next){

    console.log("url...:"+ req.url);
    console.log("time...:"+Date.now());

   // res.sendFile(path.join(__dirname,'./index.html'));

 
    next();
});



// ! =====================================

app.use('/electronic', routeElectronic);
app.listen(8080);

// ! ORDER:
// 1- The middleware inside the App.js will be first
// 2- The middleware inside the Router will be called second