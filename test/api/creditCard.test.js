require('dotenv').config({ path: `${__dirname}/../.env.test` });
require('../jest-extensions');
const request = require('supertest')
const app = require('../../src/server')
const { OK, CREATED } = require('http-status-codes');
const { sequelize, CreditCard } = require('../../db/models');

describe('Post Endpoints', () => {

  beforeEach(() => {
    sequelize.sync()
  }); 

  afterEach(() => {
    sequelize.truncate()
  }); 

  const creditCardSchema = {
    properties: {
      bank: { type: 'string'},
      company: { type: 'string'},
      id: { type: 'number'},
    }
  }

  it('/post', async () => {
    const res = await request(app)
      .post('/creditCards')
      .send({
        bank: 'Provincia',
        company: 'visa'
      })
    expect(res.status).toBe(CREATED)
    expect(res.body).toHaveProperty('id')
  })

  it('/get', async () => {
    var creditCardJson = {
      bank: 'HSBC',
      company: 'visa'
    }
    await CreditCard.create(creditCardJson)
    const res = await request(app)
      .get('/creditCards')
      .send()
    expect(res.status).toBe(OK)
    expect(res.body).toBeArrayOfSize(1);
    expect(res.body[0]).toBeValidSchema(creditCardSchema);
  })
})
