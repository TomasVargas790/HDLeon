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
const names = ['Hector', 'Juan', 'Pablo', 'Ana']
names.forEach((n) => console.log(n));
names.forEach((n) => console.log(n.toUpperCase()));
console.log(names);
names.sort()
console.log(names);

//reduce
const numbers = [11, 2, 5, 6, 1, 21, 2]
const total = numbers.reduce((prev, actual) => prev + actual, 0)
console.log(total);

//Programacion orientada a objetos
//class
class Drink {
    constructor(name) {
        this.name = name
    }
    info() {
        return `La bebida es ${this.name}`
    }
}

//functional
function Drink2(name) {
    this.name = name,
        this.info = function () {
            return `La bebida es ${this.name}`
        }
}

const drink = new Drink('Coca cola');
console.log(drink.info());

const drink2 = new Drink2('Sprite');
console.log(drink2.info());

class Beer extends Drink {

    constructor(name, alcohol) {
        super(name)
        this.alcohol = alcohol
    }
    info() {
        return `${super.info()} ${this.alcohol}`
    }
}

const beer = new Beer('Brahma', 4.5);
console.log(beer.info())