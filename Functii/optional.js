const average = (numbers) => {
    if (numbers.length === 0) return 0  

    const sum = numbers.reduce((acc, val) => acc + val, 0)
    return sum / numbers.length
}


const nums = [10, 20, 30, 40, 50]
console.log("Media:", average(nums)) 
