/* Let's put in context, we're again in our imaginary e-commerce application, now we need to store different types of PC (Laptops, Desktops, 2-in-1), to make this, instead of having a single function who repeat itself for each type of stock, we can do something like this... */

/* First, we create a class that will work as our marketplace computers almanac */

class ComputerStocks {
    constructor() {
        this.stocks = [
            {stockCategory: "LAPTOP", inStock: []},
            {stockCategory: "DESKTOP", inStock: []},
            {stockCategory: "2-IN-1", inStock: []}
        ]
    }

    /* It's simple, all this function will do is iterate our stock with certain PC type in mind, and when the correct stock is found for the PC, it is inserted into the according stock. */

    insertInStock(machine) {
        this.stocks.forEach(stock => {
            if (machine.PCCategory === stock.stockCategory) {
                stock.inStock.push(machine)
            }
        })
    }
}

/* Then we create a class to create a machine with his category */

class Computer {
    constructor(PCName, PCCategory) {
        this.PCName = PCName
        this.PCCategory = PCCategory
    }
}

/* And at this point all we got to do to expand this functionality to new stocks is create his corresponding class, expanding at the same time the stocks in our main marketplace stock.*/

class Laptop extends Computer {
    constructor(PCName, PCCategory) {
        super(PCName, "LAPTOP")
    }
}

class AllInOne extends Computer {
    constructor(PCName, PCCategory) {
        super(PCName, "2-IN-1")
    }
}

class Desktop extends Computer {
    constructor(PCName, PCCategory) {
        super(PCName, "DESKTOP")
    }
}

/* Let's do some testing! :D */

let ourDesktop = new Desktop("HP Desktop Edition 2022"),
    ourAllInOne = new AllInOne("ASUS 2018 2-IN-1 Computer"),
    ourLaptop = new Laptop("Macbook Pro Air 2017"),
    marketStock = new ComputerStocks()

marketStock.insertInStock(ourAllInOne)
marketStock.insertInStock(ourDesktop)

console.log(marketStock) /* Perfect! */
