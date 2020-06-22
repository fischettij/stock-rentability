class CreditCard {
  constructor(bank, company) {
    this.bank = bank;
    this.company = company;
    this.paymentsByMonth = new Map();
  }

  paymentsOn(date) {
    const keyDate = this.dateToStringKey(date);
    if (this.paymentsByMonth.has(keyDate)) {
      return this.paymentsByMonth.get(keyDate);
    }
    return [];
  }

  addPayment(payment) {
    const keyDate = this.dateToStringKey(payment.date);
    if (this.paymentsByMonth.has(keyDate)) {
      this.paymentsByMonth.get(keyDate).push(payment);
    } else {
      this.paymentsByMonth.set(keyDate, [payment]);
    }
  }

  // Private methods
  // eslint-disable-next-line class-methods-use-this
  dateToStringKey(date) {
    return `${date.getFullYear()}-${date.getMonth() + 1}-1)`;
  }
}

module.exports.CreditCard = CreditCard;
