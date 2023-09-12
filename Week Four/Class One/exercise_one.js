// Global Function 

function globalFunction() {
    console.log("The value of 'this' is: ", this);
}

globalFunction();

// Object with Method

const myObject = {
    name: 'MyObject',
    myMethod: function() {
        console.log("The value of 'this' is: ", this);
    }
}

myObject.myMethod();

// An Arrow Function Inside an Object

const anotherObject = {
    name: "AnotherObject",
    myArrowMethod: () => {
        console.log("The value of 'this' is: ", this);
    }
}

anotherObject.myArrowMethod();

// In the global function, "this" refers to the window.
// In the object method, "this" refers  to the object itself.
// In the arrow function, "this" refers to the window again because arrow functions do not have their own 'this' content.