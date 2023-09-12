class Person {
    constructor(name, age) {
        this.name = name;
        this._age = age;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        if (value >= 0) {
            this._age = value;
        } else {
            console.log('Age cannot be a negative value.');
        }
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age}.`);
    }

    static info() {
        console.log('This is a Person class.');
    }
}

const user_one = new Person('David', 49);

user_one.age = -20;
user_one.greet();