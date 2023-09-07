let firstName = 'John';
let lastName = 'Smith';
let age = '25';

// Exercise One

function studentInfo(firstName, lastName, age) {
    console.log(firstName +' ' + lastName + ' is ' + age + ' years old.');  // using concatenation 
    console.log(`${firstName} ${lastName} is ${age} years old.`);
}

studentInfo(firstName, lastName, age);