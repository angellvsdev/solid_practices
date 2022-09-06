/* The ISP consist in separate everything in little classes to mantain our code cleaner and prevent errors! :D*/

/* Howdy! :D Today and to end up with the practices of the SOLID principles, we'll be practicing the Dependency Inversion Principle (DIP), that tells that the high-level modules shouldn't depend of low-level modules, instead, both modules types should depend of the abstraction from an interface, and the way how a function works it's guided by the main interface. Let's see an example.*/

/* Let's put ourselves again in our imaginary marketplace; what we want to do is create an ordering algorithm to categorize the products (such a filter) at this marketplace according certain features. */

/* First, i create our main interface */

class CategorizingPattern {
    constructor(orderingCriteria, toOrderingPackage) {
        this.orderingCriteria = orderingCriteria
        this.toOrderingPackage = toOrderingPackage
    }
}

class OrderingModule {
    sortPackages() {
        let productFilteringMapped = new Map()

        this.toOrderingPackage.forEach(product => {
            this.toOrderingCriteria.forEach(criteria => {

                productFilteringMapped.set(`${criteria}`, product)
            })
        })
    }
}
