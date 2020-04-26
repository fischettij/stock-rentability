const { CreditCard } = require('../../src/model/creditCard');

describe('creditCard', () => {
  it('accessors', () => {
    var bank = 'HSBC';
    var company = 'visa';
    var creditCard = new CreditCard(bank, company);
    expect(creditCard.bank).toBe(bank)
    expect(creditCard.company).toBe(company)
  })

  it('should return empty Array for new credit card when ask payments on any date', () => {
    var creditCard = new CreditCard('HSBC', 'visa');
    expect(creditCard.paymentsOn(new Date())).toEqual([]);
  })

  it('when add payment to a new credit card and ask for payments con that mont', () => {
    var creditCard = new CreditCard('HSBC', 'visa');
    var payment = {
      amount: 100,
      description: 'Almacen',
      date: new Date()
    }
    creditCard.addPayment(payment)
    expect(creditCard.paymentsOn(new Date())).toEqual([payment]);
  })

})