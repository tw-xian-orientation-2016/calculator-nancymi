var express = require('express');
var router = express.Router();

router.post('/', function(req, res) {
    var number = req.body.number;
    var result = number / 100;
    res.send(result.toString());
});

module.exports = router;
