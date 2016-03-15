var numberStag = null;

function addToNumberStag(number) {
    if (numberStag === '0' || numberStag === null) {
        numberStag = number;
    } else {
        numberStag.append(number);
    }
    return numberStag;
}

function setNumberStag(number) {
    numberStag = number;
    return numberStag;
}

function getNumberStag() {
    return numberStag;
}

function popNumberStag() {
    var number = numberStag;
    numberStag = null;
    return numberStag;
}

function clearNumberStag() {
    numberStag = null;
}