var Heroes = require('../model/heroes');
var express = require('express');
var router = express.Router();


router.post('/createHero', function (req, res, next) {
    var data = { key: 'value', hello: 'world' };
    res.end(JSON.stringify(data));
    console.log(req.body)
    var monInsert = new Heroes(req.body);

    monInsert.save(function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log('写入成功');
        }
    });

});

router.get('/getHero', function (req, res, next) {
    Heroes.find({}, function (err, doc) {
        if (err) {
            console.log(err.message)
        } else {
            res.send(JSON.stringify(doc));
            console.log(doc)
            console.log('666666666')
        }
    })

});

module.exports = router;