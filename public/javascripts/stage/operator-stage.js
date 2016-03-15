var operatorStag = null;

function setOperator(operator) {
    operatorStag = operator;
    return operatorStag;
}

function getOperator() {
    return operatorStag;
}

function popOperator() {
    var operator = operatorStag;
    operatorStag = null;
    return operator;
}

function clearOperator() {
    operatorStag = null;
}