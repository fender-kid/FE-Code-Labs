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