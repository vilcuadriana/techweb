function concatNumbers(numbers)
{
    let result="";
    for(let i=0;i<numbers.length;i++)
    {
        result+=numbers[i];
    }
    return result;
}
 const myNumbers=[1,2,3,4,5];
 console.log(concatNumbers(myNumbers));

 