
class BancaryAccount {
  constructor(headline = " ", accountBalance = 0) {
    typeof headline !== "string" || headline.length === 0 || /[123456789]/.test(headline)
      ? console.warn(`The headline should be a person's name.`)
      : this.headline = headline

    typeof accountBalance !== "number" || accountBalance < 0
      ? console.warn("The initial headline's balance can not be less than 0.")
      : this.accountBalance = accountBalance
  }

  set stablishNewHeadline(newHeadline) {
    typeof newHeadline !== "string" || newHeadline.length === 0 || /[123456789]/.test(newHeadline)
     ? console.warn("Invalid input. Headline should be a person's name.")
     : this.headline = newHeadline
  }

  set stablishAccountBalance(newBalance) {
    typeof newBalance !== "number" || newBalance < 0
      ? console.warn("Invalid credit quantity.")
      : this.accountBalance = newBalance
  }

  get currentAccountHeadline() {
    return this.headline
  }

  get currentAccountBalance() {
    return this.accountBalance
  }

  showAccountDetails() {
    print(this)
  }

  depositCredit(money = 0) {
    typeof money !== "number" || money < 0
      ? console.warn("The credit quantity is invalid.")
      : this.accountBalance += money
  }

  withdrawCredit(withdrawal = 0) {
    typeof withdrawal !== "number" || withdrawal < 0
      ? console.warn("Invalid withdraw operation.")
      : this.accountBalance -= withdrawal
  }
}

let dummieTestingInstance = new BancaryAccount("Tyzon Woods", 100)
