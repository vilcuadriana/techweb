const sortByKey=(arr, key) => {
    return arr.sort((a, b) => {
        if (a[key] < b[key]) {
            return -1;
        }
        if (a[key] > b[key]) {
            return 1;
        }
        return 0;
    });
};


const data = [
    { name: 'Ion', age: 30 },
    { name: 'Ana', age: 25 },
    { name: 'Vasile', age: 18 }
];
const sortedByName = sortByKey(data, 'name');
console.log(sortedByName);
const sortedByAge = sortByKey(data, 'age');
console.log(sortedByAge);