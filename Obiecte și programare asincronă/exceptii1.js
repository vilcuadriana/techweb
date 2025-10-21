function increaseSalary(salaries, percent) {
   
    if (!Array.isArray(salaries)) {
        throw new TypeError("Primul parametru trebuie să fie un array de salarii");
    }

    if (typeof percent !== "number" || isNaN(percent)) {
        throw new TypeError("Al doilea parametru trebuie să fie un număr");
    }

    
    return salaries.map(salary => salary + (salary * percent / 100));
}

try {
    const salaries = [1000, 2000, 3000];
    const newSalaries = increaseSalary(salaries, 10);
    console.log(newSalaries); // [1100, 2200, 3300]

    // Test invalid
    increaseSalary("not an array", 10);
} catch (error) {
    console.log(error.message);
}

try {
    increaseSalary([1000, 2000], "ten"); // al doilea parametru invalid
} catch (error) {
    console.log(error.message);
}