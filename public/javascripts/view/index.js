'use strict';

$(document).ready(function() {
    addClickEvent();
});

function addClickEvent() {
    addNumBtnEvent();
    addNegativeBtnEvent();
    addPercentageBtnEvent();
    addSumBtnEvent();
    addSubBtnEvent();
    addMultipyBtnEvent();
    addDivisionBtnEvent();
    addClearBtnEvent();
    addAnswerBtnEvent();
}

function addNumBtnEvent() {
    $(".num-button").click(function() {
        var num = this.innerHTML;

        if (getOperatorStag() !== null) {
            let operator = popOperatorStag();
            addToOperationStag('operator', operator);
        }

        addToNumberStag(num, number => {
            $("#result").html(getPrintStr(number));
        });

        if ($("#result").innerHTML !== '0') {
            $("#clear").html('C');
        }
    });
}

function addNegativeBtnEvent() {
    $("#negative").click(function() {
        var num = getNumberStag() || '0';
        getNegative(num, data => {
            $("#result").html(getPrintStr(data));
            setNumberStag(getPrintStr(data));
        });
    });
}

function addPercentageBtnEvent() {
    $("#percentage").click(function() {
        var num =  getNumberStag() || '0';
        getPercentage(num, data => {
            $("#result").html(getPrintStr(data));
            setNumberStag(getPrintStr(data));
        });
    });
}

function addSumBtnEvent() {
    $("#sum").click(function() {
        setOperatorStag('+');
        getResult(result => {
            $("#result").html(getPrintStr(result));
        });
    });
}

function addSubBtnEvent() {
    $("#sub").click(function() {
        setOperatorStag('-');
        getResult(result => {
            $("#result").html(getPrintStr(result));
        });
    });
}

function addMultipyBtnEvent() {
    $("#multipy").click(function() {
        setOperatorStag('*');
        getResult(result => {
            $("#result").html(getPrintStr(result));
        });
    });
}

function addDivisionBtnEvent() {
    $("#division").click(function() {
        setOperatorStag('/');
        getResult(result => {
            $("#result").html(getPrintStr(result));
        });
    });
}

function addClearBtnEvent() {
     $("#clear").click(function() {
        var clear = this.innerHTML;
        switch(clear) {
            case 'C':
                clearNumberStag();
                $("#clear").html('AC');
                break;
            case 'AC':
                clearNumberStag();
                clearOperatorStag();
                clearOperationStag();
                break;
        }
        $("#result").html('0');
    });
}

function addAnswerBtnEvent() {
    $("#answer").click(function() {
        getResult(result => {
            $("#result").html(getPrintStr(result));
            clearNumberStag();
            clearOperatorStag();
        });
    });
}

function getResult(callback) {
    var number = popNumberStag();
    addToOperationStag('number', number);
    if (shouldPopOperationStag()) {
        let operation = popOperationStag();
        switch (operation.operator) {
            case '+': getSum(operation.pre, operation.next, data => {
                addToOperationStag('number', data);
                callback(data);
            }); break;
            case '-': getSub(operation.pre, operation.next, data => {
                addToOperationStag('number', data);
                callback(data);
            }); break;
            case '*': getMultiply(operation.pre, operation.next, data => {
                addToOperationStag('number', data);
                callback(data);
            }); break;
            case '/': getDivision(operation.pre, operation.next, data => {
                addToOperationStag('number', data);
                callback(data);
            }); break;
            default: break;
        }
    }
}

function getPrintStr(number) {
    if (number.length > 17) {
        return '错误';
    } else {
        return number;
    }
}