var express = require('express');
var router = express.Router();

router.post('/', function(req, res) {
    var number = parseFloat(req.body.number);
    res.json({result: (0-number).toString()});
});

module.exports = router;
