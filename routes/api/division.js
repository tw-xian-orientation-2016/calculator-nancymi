var express = require('express');
var router = express.Router();

router.post('/', function(req, res) {
    var pre = req.body.pre;
    var next = req.body.next;
    var result;
    if (next === '0') {
        result = '错误';
    } else {
        result = pre / next;
    }
    res.json({result: result.toString()});
});

module.exports = router;
