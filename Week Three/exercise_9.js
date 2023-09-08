let truck = 'Cybertruck';

function firstFunction() {
    //modify a global variable.
    truck = 'Ford F150';
    function secondFunction() {
        truck = 'Ram 1500';
        console.log(truck);
    }
    return secondFunction;
}



// function secondFunction() {
//     // modify a local variable.
//     let car = 'Model 3';
// }

let myTest = firstFunction();

myTest();