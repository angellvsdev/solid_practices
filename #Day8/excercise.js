/* Let's get in context, let's put ourselves again in our imaginary marketplace, in this ocassion, let's say we asked for some fragances, and each fragance has a different smell, each fragance can has a different behavior and be applied directly in the skin but comes from the same father class. What we'll do is apply the Liskov Substitution Principle, this principle tells that every child class got to be capable of replace his father class... Let's code our example */

/* First, we create our base class for all the fragance's types */

class Fragance {
    constructor(fragBrand, fragSmell) {
        this.fragBrand = fragBrand
        this.fragSmell = fragSmell

    }

    spare() {
        return `${this.fragBrand}'s Fragance is ${this.fragSmell} and can be spared.`
    }

    apply() {
        return `${this.fragBrand}'s Fragance is ${this.fragSmell} and can be directly applied.`
    }
}

/* Now we create a class specifically for the body lotion fragances */
class Lotion extends Fragance {
    constructor(fragBrand, fragSmell) {
        super(fragBrand, fragSmell)
    }
}

/* And one for the spray type fragances */
class Spray extends Fragance {
    constructor(fragBrand, fragSmell) {
        super(fragBrand, fragSmell)
    }
}

/* As we can see above, only with this two classes we couldn't apply correctly the Liskov Substitution Principle, because Lotions can be applied but not spared. Let's fix it */

class UseFragances {
    constructor(allFragances) {
        this.appliedFragances = [];
        this.sparedFragances = [];
        this.orderApplicationTypes(allFragances)
    }

    orderApplicationTypes(allFragances) {
        allFragances.forEach(fragance => {
            if (fragance instanceof Spray) {
               this.sparedFragances.push(fragance) 
            }
            else {
                this.appliedFragances.push(fragance)
            }
        })
    }

    applyAll() {
        let allFrags = this.appliedFragances.concat(this.sparedFragances)

        allFrags.forEach(frag => { 
            console.log(frag.apply())
        })
    }

    spareAll() {
        this.sparedFragances.forEach(frag => {
            console.log(frag.spare())
        })
    }
}

let lotion1 = new Lotion("Victoria's Secret", "Vanilla"),
    lotion2 = new Lotion("Victoria's Secret", "Strawberry"),
    sparedLotion1 = new Spray("Carolina Herrera", "Chocolate"),
    sparedLotion2 = new Spray("Carolina Herrera", "Vanilla")
    shotAllFragances = new UseFragances([lotion1, sparedLotion1, lotion2, sparedLotion2])


console.info(shotAllFragances)   

console.info(shotAllFragances.applyAll()) // Will shot all the fragances because all can be applied.

console.info(shotAllFragances.spareAll()) // Will shot only the spareable fragances because not all the fragances comes as a spray.
