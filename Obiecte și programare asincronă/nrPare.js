class Stream{
    #value;
    #nextValue;
    static #count = 0;

    constructor(value, nextValue) {
        this.#value = value;
        this.#nextValue = nextValue;
        Stream.#count++;
    }

    get value() {
        return this.#value;
    }

     get next() {
        const result = this.#value;
        this.#value = this.#nextValue(this.#value);
        return result;
    }

    static get count() {
        return Stream.#count;
    }
}

class EvenStream {
    #current;

    constructor(start) {
        
        this.#current = (start % 2 === 0 ? start : start + 1) - 2;
    }

    next() {
        this.#current += 2;
        return this.#current;
    }
}



const evens = new EvenStream(5); 
for (let i = 0; i < 5; i++) {
    console.log(evens.next());
}
