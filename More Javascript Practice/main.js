class Pizza {
    constructor(pizzaType, pizzaSize) {
        this.type = pizzaType;
        this.size = pizzaSize;
        this.crust = 'original';
    }

    getType() {
        return this.type;
    }

    setType(pizzaType) {
        this.type = pizzaType;
    }

    getSize() {
        return this.size;
    }

    setSize(pizzaSize) {
        this.size = pizzaSize;
    }

    getCrust() {
        return this.crust;
    }

    setCrust(pizzaCrust) {
        this.crust = pizzaCrust;
    }

    bake() {
        console.log(
            `Baking a ${this.size} ${this.type} ${this.crust} crust pizza.`
        );
    }
}

const myPizza = new Pizza('Pepperoni', 'small');
myPizza.bake();  // Output: Baking a small Pepperoni original crust pizza.

myPizza.setType('Margherita');
myPizza.setSize('large');
myPizza.setCrust('thin');
myPizza.bake();  // Output: Baking a large Margherita thin crust pizza.

console.log(myPizza.getType());  // Output: Margherita
console.log(myPizza.getSize());  // Output: large
console.log(myPizza.getCrust()); // Output: thin