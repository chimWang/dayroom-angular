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

router.post('/getGoodsByType', function (req, res, next) {
    Goods.find({ 'type': req.body.type }, function (err, doc) {
        if (err) {
            console.log(err.message)
        } else {
            res.send(JSON.stringify(doc));
        }
    })

});

router.post('/getGoodDetail', function (req, res, next) {
    Goods.find({ 'id': req.body.id }, function (err, doc) {
        if (err) {
            console.log(err.message)
        } else {
            res.send(JSON.stringify(doc));
        }
    })

});


module.exports = router;