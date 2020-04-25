class CreditCard {
  constructor(bank, company) {
    this.bank = bank;
    this.company = company;
    this.paymentsByMonth = new Map()
  }
  paymentsOn(date) {
    var keyDate = this._dateToStringKey(date)
    if (this.paymentsByMonth.has(keyDate)) {
      return this.paymentsByMonth.get(keyDate)
    } else {
      return []
    }
  }

  addPayment(payment) {
    var keyDate = this._dateToStringKey(payment.date)
    if (this.paymentsByMonth.has(keyDate)) {
      this.paymentsByMonth.get(keyDate).push(payment)
    } else {
      this.paymentsByMonth.set(keyDate, [payment])
      console.log(this.paymentsByMonth)
    }
  }

  // Private methods
  _dateToStringKey(date) {
    return `${date.getFullYear()}-${date.getMonth() + 1}-1)`
  }
}

module.exports.CreditCard = CreditCard
