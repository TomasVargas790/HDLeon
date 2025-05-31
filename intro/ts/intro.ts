class Drink {
    private name: string

    constructor(name: string) {
        this.name = name
    }
    info(): string {
        return this.name
    }
}

const drink = new Drink('Brahma');
console.log(drink.info());

//interfaces
interface Product {
    price: number
    getPrice(): string
}

class Beer extends Drink implements Product {
    private alcohol: number
    price: number;

    constructor(name: string, alcohol: number, price: number) {
        super(name);
        this.price = price
        this.alcohol = alcohol
    }
    info(): string {
        return `${super.info()} ${this.alcohol}`
    }
    getPrice(): string {
        return '[BEER] ' + this.price.toString()
    }
}

class Snack implements Product {
    price: number;
    name: string;

    constructor(name: string, price: number) {
        this.price = price
        this.name = name
    }

    getPrice(): string {
        return '[SNACK] ' + this.price.toString()
    }
}
const drink2 = new Beer('Quilmes', 4.4, 1500);
console.log(drink2.info());

const products: Product[] = [
    new Beer('Corona', 5, 2000),
    new Snack('Doritos', 2500)
]

function getPrices(items: Product[]) {
    for (const item of items) {
        console.log(item.getPrice());
    }
}
getPrices(products)