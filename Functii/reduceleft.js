const reduceLeft = (array, callback, initialValue) => {
    let accumulator = initialValue
    let startIndex = 0

    /
    if (accumulator === undefined) {
        accumulator = array[0]
        startIndex = 1
    }

    for (let i = startIndex; i < array.length; i++) {
        accumulator = callback(accumulator, array[i])
    }

    return accumulator
}


const sampleArray = [1, 2, 3, 4, 5]


console.log("Suma:", reduceLeft(sampleArray, (acc, val) => acc + val)) // 15


console.log("Produs:", reduceLeft(sampleArray, (acc, val) => acc * val)) // 120
