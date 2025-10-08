let sayHello=(name)=>{return`Hello, ${name}!`};


console.log(sayHello(process.argv[2]));


const concatStrings=(arr)=>{return arr.join('');};

const myArray = ["Ce ", "mai ", "faci?"];
const concatenatedMessage = concatStrings(myArray);
console.log(concatenatedMessage);

