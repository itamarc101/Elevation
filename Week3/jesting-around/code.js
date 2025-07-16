const add = function(a, b){
    return a + b;
}

const calculateHyp = function(a, b) {
    return Math.sqrt(a*a + b*b);
}

module.exports = {
    add,
    calculateHyp
};