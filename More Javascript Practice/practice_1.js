class Human {
    // constructor to initialize object properties
    constructor(name, age, gender, nationality) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.nationality = nationality;
    }

    // Getter for the name property
    getName() {
        return this.name;
    }

    // Setter for the name property
    setName(name) {
        this.name = name;
    }

    // Getter for the age property
    getAge() {
        return this.age;
    }

    // Setter for the age property
    setAge(age) {
        if (age < 0) {
            console.log('Age cannot be negative');
            return;
        }
        this.age = age;
    }

    // Getter for the gender property
    getGender() {
        return this.gender;
    }

    // Setter for the gender property.
    setGender(gender) {
        this.gender = gender;
    }

    // Getter for the nationality property.
    getNationality() {
        return this.nationality;
    }

    // Setter for the nationality property.
    setNationality(nationality) {
        this.nationality = nationality;
    }

    introduce() {
        console.log(`Hi, my name is ${this.name} and I am a ${this.age} year old ${this.gender} from the ${this.nationality}.`);
    }
}

// Create an instance of the Human class.
let player_one = new Human('James', 41, 'male', 'USA');

// Call the introduce method.
player_one.introduce();

// Using setters to update properties.
player_one.setName('Jp');
player_one.setAge(39);

// Using getters to retrieve properties.
console.log('Updated name:', player_one.getName());
console.log('Updated age: ', player_one.getAge());

// Calling the introduce method again to test the updated info.
player_one.introduce();