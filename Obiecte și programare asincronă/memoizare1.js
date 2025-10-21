function powGen() {
    const cache = new Map(); 

    const pow = (base, exp) => {
        const key = `${base},${exp}`;
        if (cache.has(key)) {
            console.log(`found ${key}`);
            return cache.get(key);
        }

        let result;
        if (exp === 0) {
            result = 1; 
        } else {
            console.log(`calculating ${key}`);
            result = base * pow(base, exp - 1); 
        }

        cache.set(key, result);
        return result;
    };

    return pow;
}
const pow = powGen();

console.log(pow(2, 0)); 
console.log(pow(2, 3)); 
console.log(pow(2, 2));
console.log(pow(3, 3)); 