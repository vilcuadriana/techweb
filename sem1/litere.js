const sampleString = "the quick brown fox jumps over the lazy dog";

const getCounts = (text) => {
    const result = {};
    for (let letter of text) {
        if (letter === " ") continue; // ignorăm spațiile
        if (letter in result) {
            result[letter]++;
        } else {
            result[letter] = 1;
        }
    }
    return result;
}

console.log(getCounts(sampleString));