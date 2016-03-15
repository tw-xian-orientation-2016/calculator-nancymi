var operationStag = {
    pre: null,
    operator: null,
    next: null
};

function addToOperationStag(key, value) {
    switch(key) {
        case 'pre': operationStag.pre = value; break;
        case 'operator': operationStag.operator = value; break;
        case 'next': operationStag.next = value; break;
        default: throw 'Illegal attribute.';
    }
    return operationStag;
}

function clearOperationStag() {
    operationStag.pre = null;
    operationStag.operator = null;
    operationStag.next = null;
}