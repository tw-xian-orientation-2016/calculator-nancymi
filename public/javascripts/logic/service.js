function getNegative(number, callback) {
    $.post('/api/negative', {number: number})
        .success(function(data) {
            callback(data.result);
        });
}

function getPercentage(number, callback) {
    $.post('/api/percentage', {number: number})
        .success(function(data) {
            callback(data.result);
        });
}

function getSum(pre, next, callback) {
    $.post('/api/sum', {pre: pre, next: next})
        .success(function(data) {
            callback(data.result);
        });
}

function getSub(pre, next, callback) {
    $.post('/api/sub', {pre: pre, next: next})
        .success(function(data) {
            callback(data.result);
        });
}

function getMultiply(pre, next, callback) {
    $.post('/api/multiply', {pre: pre, next: next})
        .success(function(data) {
            callback(data.result);
        });
}

function getDivision(pre, next, callback) {
    $.post('/api/division', {pre: pre, next: next})
        .success(function(data) {
            callback(data.result);
        });
}