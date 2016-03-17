var express = require('express');
var router = express.Router();

router.post('/', function(req, res) {
    var pre = parseFloat(req.body.pre);
    var next = parseFloat(req.body.next);
    var result = pre - next;
    res.json({result: result.toString()});
});

module.exports = router;
