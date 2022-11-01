/* First, i code the main class to create a Pokedex */

class Pokedex {
    constructor() {
        this.pokeIndexes = new Set() // I use a set to avoid duplicated items
    }

    obtainPokeIndexes() {
        this.pokeIndexes.forEach(index => index)
    }

    saveNewIndex(pokemon) {
        this.pokeIndexes.add(pokemon)
    }

    eraseIndex(pokemon) {
        this.pokeIndexes.delete(pokemon)
    }
} // We create

/* Then we create a class to create new Pokemons */

class Pokemon {
    constructor(mote, type, evolutions) {
        this.mote = mote
        this.type = type
        this.evolutions = evolutions
    }
}

/* To respect the SOLID principles, instead of give a type manually for each pokemon we create, we can create a class by each pokemon type */

class FirePokemon extends Pokemon {
    constructor(mote, evolutions) {
        super(mote, "Fire", evolutions)
    }
}


class WaterPokemon extends Pokemon {
    constructor(mote, evolutions) {
        super(mote, "Water", evolutions)
    }
}

class ElectricPokemon extends Pokemon {
    constructor(mote, evolutions) {
        super(mote, "Electric", evolutions)
    }
}

/* At this point, we'll probaby want that our Pokedex brought pokemons according to their type, but we can add special functionalities to the main Pokedex class because it only got to accomplish with his unique responsability, manage the pokemons, to respect this principle, we use mix-ins (to emulate interfaces) and add special functions to our Pokedex while we still respecting the Single Resposibility Principle */

const getPokemonsByType = fatherClass => class extends fatherClass {
    getByType(pokemonType) {
        this.pokeIndexes.forEach(pokemon => {
            if (pokemon.type === pokemonType) {
                console.log(pokemon)
            }
        })
    }
}

/* And we add this special function to our main pokedex */

class enhancedPokedex extends getPokemonsByType(Pokedex) {
    constructor(pokeIndexes) {
        super(pokeIndexes)
    }
}

let pokedex = new enhancedPokedex()

console.log(pokedex)

let charmander = new FirePokemon("Charmander", ["Charmeleon", "Charizard"])
let charmeleon = new FirePokemon("Charmeleon", ["Charizard"])
let pikachu = new ElectricPokemon("Pikachu", ["Raichuu"])
let squirtle = new WaterPokemon("Squirtle", ["Squartle", "Warturtle"])
let squartle = new WaterPokemon("Squartle", ["Warturtle"])

pokedex.saveNewIndex(charmander)
pokedex.saveNewIndex(charmeleon)
pokedex.saveNewIndex(pikachu)
pokedex.saveNewIndex(squirtle)
pokedex.saveNewIndex(squartle)

pokedex.getByType('Fire')

/* This way, we can separate our programm in more little parts and make it easier to read and understand using some of the SOLID principles, filter by data types, and mantain our code clean. */
