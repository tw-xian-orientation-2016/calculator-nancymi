var numberStag = null;
function addToNumberStag(number, callback) {
    if (numberStag == null || (numberStag == '0' && number !== '.')) {
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