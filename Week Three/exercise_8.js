function setUpCounter() {
    let count = 0;

    function incrementAndLog() {
        console.log(count);
        count++;

        if (count >= 10) {
            count = 0;
        }
    }

    return incrementAndLog;
}

let myCounter = setUpCounter();

let i = 0;

while(i <= 10) {
    myCounter();
    i++;
}

// Closure ensures our inner function still has access to our count variable. 