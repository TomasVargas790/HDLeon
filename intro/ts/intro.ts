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

class Beer extends Drink {
    private alcohol: number
    
    constructor(name: string, alcohol: number) {
        super(name);
        this.alcohol = alcohol
    }
    info(): string {
        return `${super.info()} ${this.alcohol}`
    }
}
const drink2 = new Beer('Quilmes',4.4);
console.log(drink2.info());