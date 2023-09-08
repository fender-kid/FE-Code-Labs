function hoistingTest() {
    console.log(student_name);
    let student_name = 'Jane'; // Will error out because student_name is declared after we attempt to initialize it.
}

hoistingTest();