var express = require('express');
var router = express.Router();

router.post('/', function(req, res) {
    var number = parseFloat(req.body.number);
    var result = number / 100;
    res.json({result: result.toString()});
});

module.exports = router;
