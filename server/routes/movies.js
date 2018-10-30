var Movie = require('../model/movie');
var express = require('express');
var router = express.Router();


router.get('/', function (req, res, next) {
 
    Movie.find({},function(err, doc){ 
        if(err) {
            console.log(err.message)
        }else{
            res.send('获取数据成功'+doc);
            console.log(doc)
        }
    })

});

module.exports = router;