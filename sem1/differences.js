function countDifferences(str1,str2)
{
    if(str1.length!=str2.length)
    {
        return -1;
    }
    else
    {
        let nr=0;
        for(let i=0;i<str1.length;i++)
        {
            if(str1[i]!==str2[i])
                nr++
        }
        return nr;

    }
    
}
console.log(countDifferences("abcde", "abfde")); 
console.log(countDifferences("test","testing"));
console.log(countDifferences("maria","catalina"));