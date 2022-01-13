
class YoungUserBancaryAccount extends BancaryAccount {
  constructor(headline, accountBalance, userAge, bonification) {
    super(headline, accountBalance)
    this.userAge = userAge
    this.bonification = bonification
  }

  isTheAgeRangeCorrect() {
    if (this.userAge >= 18 && this.userAge <= 25) {
      return true
    }
    else {
      return false
    }
  }

  
  withdrawCredit(withdrawal = 0) {
    if (this.userAge >= 18 && this.userAge <= 25) {
      typeof withdrawal !== "number" || withdrawal < 0
      ? console.warn("Invalid withdraw operation.")
      : this.accountBalance -= withdrawal
    }
    else {
      console.warn(`${this.headline} isn't authorized to make operations.`)
    }
  }
}

let dummieTestingExtendedInstance = new YoungUserBancaryAccount("Mars Warhammer", 200, 19, "10%")
