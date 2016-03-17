var numberStag = null;
function addToNumberStag(number, callback) {
    numberStag = numberStag || '0';
    if (number === '.') {
        if (numberStag.indexOf('.') === -1) {
            numberStag += number;
        }
    } else if (numberStag === '0') {
        numberStag = number;
    } else if (numberStag.length < 17) {
        numberStag = numberStag + number;
    }
    callback(numberStag);
}

function setNumberStag(number) {
    numberStag = number;
}

function getNumberStag() {
    return numberStag;
}

function popNumberStag() {
    var number = numberStag;
    numberStag = null;
    return number;
}

function clearNumberStag() {
    numberStag = null;
}