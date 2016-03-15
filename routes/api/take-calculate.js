var express = require('express');
var router = express.Router();

router.post('/', function(req, res) {
    var pre = req.body.pre;
    var operator = req.body.operator;
    var next = req.body.next;
    var result;
    switch (operator) {
        case '+': {
            result = pre + next;
            break;
        }
        case '-': {
            result = pre - next;
            break;
        }
        case '*': {
            result = pre * next;
            break;
        }
        case '/': {
            if (next === 0) {
                result = '错误';
            } else {
                result = pre / next;
            }
            break;
        }
        default: {
            result = '错误';
        }
    }
    res.send(result.toString());
});

module.exports = router;
