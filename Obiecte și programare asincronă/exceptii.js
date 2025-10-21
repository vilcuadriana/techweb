const orderCoffe=(type)=>
{
    const types={
        SPECIAL: "SPECIAL",
        REGULAR: "REGULAR"
    }
    if(Object.values(type).indexOf(type)===-1)
    {
        throw new Error("coffee error");
    }
    else{
        console.log("preparing ${type} coffee");
    }
}

try{
    orderCoffe("REGULAR");
    orderCoffe("ESPRESSO");

}
catch(error)
{
    console.log(error.message);
}