// First
function* gen() {
    yield 1;
    yield 2;
    yield 3;
}

const result = gen();

console.log(result.next());
console.log(result.next());
console.log(result.next());

// Second
function* iterate(array) {
    for(let value of array) {
        yield value;
    }
}

const result = iterate([1, 2, 3, 4]);
console.log(result.next());
console.log(result.next());
console.log(result.next());
console.log(result.next());

