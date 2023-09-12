class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age}.`);
    }
}

const user_one = new Person('John', 21);
const user_two = new Person('Paul', 23);

user_one.greet();
user_two.greet();