function add(value1, value2) {
    return value1 + value2;
}

function subtract(value1, value2) {
    return value1 - value2;
}

function multiply(value1, value2) {
    return value1 * value2;
}

function divide(value1, value2) {
    return value1 / value2;
}

function increment(value) {
    return (value += 1)
}

function decrement(value) {
    return (value -= 1)
}

function makeInt(value) {
    return (parseInt(value, 10))
}

function preserveDecimal(value) {
    return (parseFloat(value))
}