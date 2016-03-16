var operationStag = {
    pre: null,
    operator: null,
    next: null
};

function addToOperationStag(key, value) {
    if (value === null) {
        callback(operationStag);
    } else {
        switch(key) {
            case 'number': {
                if (operationStag.pre === null) {
                    operationStag.pre = value;
                } else if (operationStag.next === null) {
                    operationStag.next = value;
                } else {
                    operationStag.pre = value;
                }
                break;
            }
            case 'operator': operationStag.operator = value; break;
            default: throw 'Illegal attribute.';
        }
    }
}

function shouldPopOperationStag() {
    if (operationStag.pre !== null && operationStag.operator !== null && operationStag.next !== null) {
        return true;
    } else {
        return false;
    }
}

function popOperationStag() {
    var operation = {
        pre: operationStag.pre,
        operator: operationStag.operator,
        next: operationStag.next
    };

    operationStag = null;
    return operation;
}

function clearOperationStag() {
    operationStag = null;
}