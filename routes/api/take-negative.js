var express = require('express');
var router = express.Router();

router.post('/', function(req, res) {
    var number = req.body.number;
    res.send((0-number).toString());
});

module.exports = router;
