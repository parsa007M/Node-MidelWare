var path = require('path')

module.exports.index = function(req,res){

    // ! Middleware TEST
    console.log(req.test);


    res.sendFile(path.join(__dirname,'../../index.html'))
}


module.exports.computer = function(req,res){
    res.sendFile(path.join(__dirname,'../../login.html'))
}

