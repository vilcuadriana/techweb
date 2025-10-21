String.prototype.capitalizeWords = function() {
    return this.replace(/\b[a-z]/g, match => match.toUpperCase());
}

console.log("hello world from javascript".capitalizeWords());

Number.prototype.times = function(callback) {
    for (let i = 0; i < this; i++) {
        callback(i);
    }
};

3..times(() => console.log("Hello!"));