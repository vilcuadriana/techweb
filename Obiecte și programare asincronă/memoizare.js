function fibGen()
{
    const cache=[1,1];
    const fib=(index)=>
    {
        if(index<cache.length)
        {
            console.log("found"+index);
            return cache[index];
        }
        else{
            console.log("calculating"+index);
            cache[index]=fib(index-1)+fib(index-2);
            return cache[index];
        }
    }
    return fib;
}
const f=fibGen();
console.log(f(1));
console.log(f(5));
console.log(f(3));