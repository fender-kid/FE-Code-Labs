function setUpCounter() {
    let count = 0;
    function innerFunction() {
        console.log(count);
        count++;
    }
    while (count <= 10) {
        innerFunction();
    }
}

setUpCounter();