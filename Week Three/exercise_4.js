let month = 'September';

function newMonth() {
    month = 'October'
    return month;
}

function sameMonth() {
    let month = 'January';
    return month;
}

console.log(newMonth());
console.log(sameMonth());