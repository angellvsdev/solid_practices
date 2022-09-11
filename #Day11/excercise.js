
/* Howdy! :D Today and to end up with the practices of the SOLID principles, we'll be practicing the Dependency Inversion Principle (DIP), that tells that the high-level modules shouldn't depend of low-level modules, instead, both modules types should depend of the abstraction from an interface, and the way how a function works it's guided by the main interface. Let's see an example.*/

/* Let's put ourselves again in our imaginary marketplace; what we want to do is create an ordering algorithm to categorize the products (such a filter) at this marketplace according certain features. */

/* First, i create our main interface */

class CategorizingPattern {
    constructor(orderingCriteria, toOrderingPackage) {
        this.orderingCriteria = orderingCriteria
        this.toOrderingPackage = toOrderingPackage
    }
}

/* Now, i create the low-level module that will sort our products according certain characteristics.*/

class OrderingModule extends CategorizingPattern {
    constructor(orderingCriteria, toOrderingPackage) {
        super(orderingCriteria, toOrderingPackage)
    }

    sortPackages() {
        let productFilteringMapped = new Map()

        this.toOrderingPackage.forEach(product => {
            this.orderingCriteria.forEach(criteria => {

                productFilteringMapped.set(`${criteria}`, product[criteria])
            })
            console.log(productFilteringMapped)
        })
    }
}

/* And the high-level module that will manage the instance of computers in our stock. */

class PersonalComputer {
    constructor(model, ramMemory, processor, graphicCard, screenInches, availableColours) {
        this.model = model
        this.ramMemory = ramMemory
        this.processor = processor
        this.graphicCard = graphicCard
        this.screenInches = screenInches
        this.availableColours = availableColours
    }
}

/* Now we instances our PC's.*/

let dummieComputer = new PersonalComputer(
    "ASUS Star 2021",
    "4GB",
    "Intel N4200",
    "Intel HD Graphics",
    '14.0"',
    ["Black", "White", "Pink"]
)

let dummieComputer2 = new PersonalComputer(
    "MacBook Pro 2022",
    "4GB",
    "Chip M1",
    "AMD Ryzen 5",
    '17.0"',
    ["White", "Gray"]
)

console.log(dummieComputer)

let sortMachines = new OrderingModule([`ramMemory`, `processor`], [dummieComputer, dummieComputer2])

console.log(sortMachines)
sortMachines.sortPackages()

/* 
ramMemory: 4GB, processor: Intel N4200
ramMemory: 4GB, processor: Chip M1
*/

/* With this principle we can modularize our code in a better way! :D */
