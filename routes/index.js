var express = require('express');
var router = express.Router();
var fs = require("fs");

/* GET home page. */
router.get('/', function(req, res, next) {
  fs.readdir('./public/upload', function (err, fotos) {
        res.render('index', { fotos: fotos });
    });
});

module.exports = router;
