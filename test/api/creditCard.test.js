require('dotenv').config({ path: `${__dirname}/../.env.test` });
const request = require('supertest');
const { OK, CREATED } = require('http-status-codes');
const app = require('../../src/server');
const { sequelize, CreditCard } = require('../../db/models');

describe('creditCard', () => {
  beforeEach(async () => {
    await sequelize.sync({ force: true });
  });

  it('/post', async () => {
    const res = await request(app)
      .post('/creditCards')
      .send({
        bank: 'Provincia',
        company: 'visa',
      });
    expect(res.status).toBe(CREATED);
    expect(res.body).toHaveProperty('id');
  });

  it('/get', async () => {
    const creditCardJson = {
      bank: 'HSBC',
      company: 'visa',
    };
    await CreditCard.create(creditCardJson);
    const res = await request(app)
      .get('/creditCards')
      .send();
    expect(res.status).toBe(OK);
    expect(res.body.length).toEqual(1);
    expect(res.body[0]).toEqual(
      {
        bank: 'HSBC',
        company: 'visa',
        id: 1,
      },
    );
  });
});
