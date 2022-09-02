/* Howdy! Now we'll finishing practicing the basic ways to apply the SOLID principles, and today we'll practice with the ISP (Interface Segregation Principle) with JavaScript, let's get in context; this principle tell us that interfaces shouldn't depend of methods/functionalities they don't use. Let's code and example...

Note: JavaScript does not posses interfaces by itself, so we'll use some mix-ins to simulate some interfaces (coming soon we'll use TypeScript to apply this principle by rule).*/

/* I'll use animals as example... then we create the base class */

class Animal {
    constructor(mote, age) {
        this.mote = mote
        this.age = age
    }
}

/* Now i'll create a class to instance dogs */

class Dog extends Animal {
    constructor(mote, age, dogRace) {
        super(mote, age)
        this.dogRace = dogRace
    }

    bark() {
        return "Woof woof!"
    }
}

/* Now, let's talk about an characteristic of the dogs, no dog can bite without breathing excect for the PitBull, this interface doesn't needs this functionality, but the Pitbulls does, let's use a Mix-in... */

const pitbullBite = fatherClass => class extends fatherClass {
    strongBite() {
        return `Woof!, i'm ${this.mote} and i bite stronger than others dog's races.`
    }
}

class Pitbull extends pitbullBite(Dog) {
    constructor(mote, age, dogRace) {
        super(mote, age, dogRace)
    }
}

const Yankee = new Pitbull("Yankee", 4, "Pitbull")
console.log(Yankee.bark())
console.log(Yankee.strongBite())

/* The ISP consist in separate everything in little classes to mantain our code cleaner and prevent errors! :D*/
