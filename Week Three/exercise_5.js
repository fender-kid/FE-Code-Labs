function functionFactory(param) {
    let myVariable = param;
    function newFunction() {
        let newVariable = myVariable;
        return newVariable;
    }
    return newFunction();// Return a function that makes use of 'param'
}

// Create an instance of the inner function by invoking functionFactory with a parameter
console.log(functionFactory('Winner!'));