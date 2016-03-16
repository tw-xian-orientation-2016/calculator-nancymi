var operatorStag = null;

function setOperatorStag(operator) {
    operatorStag = operator;
    return operatorStag;
}

function getOperatorStag() {
    return operatorStag;
}

function popOperatorStag() {
    var operator = operatorStag;
    operatorStag = null;
    return operator;
}

function clearOperatorStag() {
    operatorStag = null;
}