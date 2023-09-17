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
    { make: 'Hyundai', model: 'Elantra', year: 2022, color: 'orange' }
  ];
  
// Create an array of Car objects.
const cars = carDataArray.map(data => new Car(data.make, data.model, data.year, data.color));

for (car of cars) {
    car.carDetails();
}