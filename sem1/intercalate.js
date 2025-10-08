function intercalateArray(arr1,arr2)
{
    if(arr1.length!==arr2.length)
    { 
        return "Nu au aceeasi lungime";
    }
    let result=[];
    for(let i=0;i<arr1.length;i++)
    {
        result.push(arr1[i]);
        result.push(arr2[i]);
    }
    return result;
}

const array1=[1,3,5];
const array2=["a","b","c"];
console.log(intercalateArray(array1,array2));

