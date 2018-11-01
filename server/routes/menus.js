var Menus = require('../model/menus');
var express = require('express');
var router = express.Router();

router.get('/getMenu', function (req, res, next) {
    Menus.find({}, function (err, doc) {
        if (err) {
            console.log(err.message)
        } else {
            res.send(JSON.stringify(doc));
        }
    })

});

module.exports = router;