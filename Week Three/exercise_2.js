function mainFunction() {
	sayName(); // Call the hoistedFunction here
	function sayName() {
        console.log('Say my name!');
    }// Now, declare the hoistedFunction below
}

mainFunction();