function getStudent() {
    let first_name = 'John';
    function getName(first_name) {
        console.log(first_name);
    }
    return getName(first_name);
}

getStudent();