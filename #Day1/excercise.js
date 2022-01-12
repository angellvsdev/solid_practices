const print = (message) => console.log(message)

class Person {
  constructor(name, age, dni) {
    this.name = name,
    this.age = age,
    this.dni = dni
  }

  set setName(userName) {
    return this.name = userName
  }

  set setUserAge(userAge) {
    return this.age = userAge
  }

  set setUserDNI(userDNI) {
    return this.dni = userDNI
  }

  get getUserName() {
    return this.name
  }

  get getUserAge() {
    return this.age
  }

  get getUserDNI() {
    return this.dni
  }

  showUserData() {
    return this
  }

  isAdult() {
    if (this.age < 18) {
      return console.warn(`${this.name} isn't adult.`)
    }
  }

  validateEntries() {
    let isAnInvalidAgeFormat = typeof this.age !== "number",
      findInvalidCharacters = /[123456789]/,
      isAInvalidName = typeof this.name !== "string" || findInvalidCharacters.test(this.name),
      isAInvalidDNI = typeof this.dni !== "number"

    if (isAInvalidName) {
      this.setName = null
      return print("Name is invalid.")
    }
    if (isAnInvalidAgeFormat || this.age > 100 || this.age <= 0) {
      this.setUserAge = null
      return print("Age is invalid.")
    }
    if (isAInvalidDNI) {
      this.setUserDNI = null
      return print("DNI is invalid.")
    }
  }
}

let person = new Person("Mike", 18, 12012300)
let secondPerson = new Person("Becker", 18, 20045151)
