class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age}.`);
    }

    static info() {
        console.log('This is a Person class.');
    }
}

const user_one = new Person('David', 49);
const user_two = new Person('Angela', 48);

Person.info();
user_one.info();

// I'm able to access my static method from the class itself using Person.info() but I cannot call the static method on the instance of this class.