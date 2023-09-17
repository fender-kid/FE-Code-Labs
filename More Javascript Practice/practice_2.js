class Car {
    // Constructor initializes object properties.
    constructor(make, model, year, color) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
    }

    // Getter for make
    getMake() {
        return this.make;
    }

    // Setter for make
    setMake(make) {
        this.make = make;
    }

    // Getter for model
    getModel() {
        return this.model;
    }

    // Setter for model
    setModel(model) {
        this.model = model;
    }

    // Getter for year
    getYear() {
        return this.year;
    }

    // Setter for year
    setYear(year) {
        this.year = year;
    }

    // Getter for color
    getColor() {
        return this.color;
    }

    // Setter for color
    setColor(color) {
        this.color = color;
    }

    // Method to console log the make, model, year, and color.
    carDetails() {
        console.log(`${this.year} ${this.make} ${this.model} in ${this.color}`);
    }

}

car_one = new Car('Tesla', 'Model 3', 2024, 'blue');

car_one.carDetails();

car_one.fuel_type = 'electric';

console.log(car_one);

for (item in car_one) {
    console.log(`${item}: ${car_one[item]}`);
}

// An array of car data.
const carDataArray = [
    { make: 'Tesla', model: 'Model 3', year: 2024, color: 'blue' },
    { make: 'Ford', model: 'F-150', year: 2022, color: 'red' },
    { make: 'Toyota', model: 'Camry', year: 2021, color: 'silver' },
    { make: 'BMW', model: '3 Series', year: 2020, color: 'black' },
    { make: 'Honda', model: 'Civic', year: 2019, color: 'white' },
    { make: 'Chevrolet', model: 'Tahoe', year: 2023, color: 'green' },
    { make: 'Audi', model: 'A4', year: 2021, color: 'gray' },
    { make: 'Mercedes-Benz', model: 'C-Class', year: 2019, color: 'navy' },
    { make: 'Volkswagen', model: 'Jetta', year: 2018, color: 'yellow' },
    { make: 'Hyundai', model: 'Elantra', year: 2022, color: 'orange' },
    { make: 'Nissan', model: 'Altima', year: 2015, color: 'pink' },
    { make: 'Jeep', model: 'Wrangler', year: 2016, color: 'purple' },
    { make: 'Mazda', model: '3', year: 2017, color: 'gold' },
    { make: 'Subaru', model: 'Impreza', year: 2019, color: 'brown' },
    { make: 'Porsche', model: '911', year: 2020, color: 'beige' },
    { make: 'Ferrari', model: '488', year: 2018, color: 'lime' },
    { make: 'Jaguar', model: 'F-Type', year: 2019, color: 'teal' },
    { make: 'Dodge', model: 'Charger', year: 2017, color: 'magenta' },
    { make: 'Chrysler', model: '300', year: 2016, color: 'ivory' },
    { make: 'GMC', model: 'Sierra', year: 2018, color: 'tan' },
    { make: 'Tesla', model: 'Model 3', year: 2024, color: 'blue' },
    { make: 'Ford', model: 'F-150', year: 2022, color: 'red' },
    { make: 'Toyota', model: 'Camry', year: 2021, color: 'silver' },
    { make: 'BMW', model: '3 Series', year: 2020, color: 'black' },
    { make: 'Honda', model: 'Civic', year: 2019, color: 'white' },
    { make: 'Chevrolet', model: 'Tahoe', year: 2023, color: 'green' },
    { make: 'Audi', model: 'A4', year: 2021, color: 'gray' },
    { make: 'Mercedes-Benz', model: 'C-Class', year: 2019, color: 'navy' },
    { make: 'Volkswagen', model: 'Jetta', year: 2018, color: 'yellow' },
    { make: 'Hyundai', model: 'Elantra', year: 2022, color: 'orange' },
    { make: 'Tesla', model: 'Model S', year: 2021, color: 'blue' },
    { make: 'Ford', model: 'Mustang', year: 2020, color: 'black' },
    { make: 'Toyota', model: 'Corolla', year: 2019, color: 'white' },
    { make: 'BMW', model: 'X3', year: 2020, color: 'gray' },
    { make: 'Honda', model: 'Accord', year: 2018, color: 'red' },
    { make: 'Chevrolet', model: 'Suburban', year: 2022, color: 'blue' },
    { make: 'Audi', model: 'A6', year: 2019, color: 'black' },
    { make: 'Mercedes-Benz', model: 'E-Class', year: 2020, color: 'silver' },
    { make: 'Volkswagen', model: 'Golf', year: 2018, color: 'green' },
    { make: 'Hyundai', model: 'Santa Fe', year: 2021, color: 'navy' },
];

  
// Create an array of Car objects.
const cars = carDataArray.map(data => new Car(data.make, data.model, data.year, data.color));

// for (car of cars) {
//     car.carDetails();
// };

// A filtering example.
const newCars = cars.filter(car => car.getYear() >= 2023);

console.log(newCars);

// A sorting example.
// The comparison function takes two arguments, a and b, which are elements from the array to be compared.

// The result of (a.getYear() - b.getYear()) dictates the sort order:

// If the result is < 0, a comes before b. If the result is > than 0, a comes after b.
// If the result === 0, a and b remain unchanged with respect to each other.

const sortedByYear = cars.sort((a, b) => a.getYear() - b.getYear());

console.log(sortedByYear);

// Get an array of car details as strings
const carDetails = cars.map(car => {
    return `${car.getYear()} ${car.getMake()} ${car.getModel()} in ${car.getColor()}`;
})

console.log(carDetails);

// Count how many cars of a specific make are in my array
// Initialize an empty object called carMakeCount
const carMakeCount = {};

// For each Car object in the cars array.
cars.forEach(car => {
    // calls the getter method
    const make = car.getMake();
    // carMakeCount[make] looks for the value associated with the key 'make'
    // (carMakeCount[make] || 0) if hte value exists, it uses it - otherwise, it uses 0.
    // +1: it adds 1 to this value.
    carMakeCount[make] = (carMakeCount[make] || 0) + 1;
});

console.log(carMakeCount);

// Example of chaining methods.
const newerCars = cars.filter(car => car.getYear() >= 2023)
    .sort((a, b) => a.getMake().localeCompare(b.getMake()))
    .map(car => `${car.getYear()} ${car.getMake()} ${car.getModel()} in ${car.getColor()}`);

console.log(newerCars);