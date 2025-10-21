String.prototype.capitalizeWords = function() 
    {
        return this.replace(/\b[a-z]/g,match=>match.toUpperCase)
    }
console.log("hello world from javascript".capitalizeWords()) 