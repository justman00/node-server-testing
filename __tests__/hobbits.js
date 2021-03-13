const supertest = require('supertest');
const server = require('../server');
const db = require('../data/config');

describe('hobbits integration test', () => {
  beforeEach(async () => {
    await db.seed.run();
  });

  afterAll(async () => {
    await db.destroy();
  });

  test('gets a list of endpoints', async () => {
    const res = await supertest(server).get('/hobbits');

    // status code
    expect(res.status).toBe(200);
    // sa primesc json
    expect(res.type).toBe('application/json');
    // ce date sa primesc
    expect(res.body.length).toBe(5);
    expect(res.body[0].id).toBe(1);
    expect(res.body[0].name).toBe('sam');
  });

  // de implementat hobbits/:id
  // atunci cand faci request la hobbit-ul cu id-ul 1 sa aveti un hobbit valid
  // /hobbits/50 sa primit un 404

  test('creates a new hobbit', async () => {
    const res = await supertest(server)
      .post('/hobbits')
      .send({ name: 'bilbo' });

    expect(res.status).toBe(201);
    expect(res.type).toBe('application/json');
    expect(res.body.name).toBe('bilbo');

    const getResponse = await supertest(server).get('/hobbits');
    expect(getResponse.body).toHaveLength(6);
  });
});
