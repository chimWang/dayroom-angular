var Goods = require('../model/goods');
var express = require('express');
var router = express.Router();

router.get('/getGoods', function (req, res, next) {
    Goods.find({}, function (err, doc) {
        if (err) {
            console.log(err.message)
        } else {
            res.send(JSON.stringify(doc));
        }
    })

});

module.exports = router;