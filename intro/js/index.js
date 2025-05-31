function sum(a, b) {
    return a + b
}
let res = sum(3, 5);
console.log(res);

const fSum = sum
res = fSum(2, 5);
console.log(res);

function operation(fn, a, b) {
    console.log('pasa algo');
    console.log(fn(a, b));
}

operation(sum, 10, 20)

//arrow function
let fa = () => console.log('algo');
fa()

operation((a, b) => a * b, 10, 20)
operation((a, b) => {
    let c = a + b
    return c * 2
}, 10, 20)

//foreach
const names = ['Hector','Juan','Pablo']