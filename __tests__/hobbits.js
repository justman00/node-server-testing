const supertest = require('supertest');
const server = require('../server');

describe('hobbits integration test', () => {
  test('gets a list of endpoints', async () => {
    const res = await supertest(server).get('/hobbits');

    // status code
    expect(res.status).toBe(200);
    // sa primesc json
    expect(res.type).toBe('application/json')
    // ce date sa primesc
    expect(res.body.length).toBe(5);
    expect(res.body[0].id).toBe(1);
    expect(res.body[0].name).toBe('sam');
  });

  // de implementat hobbits/:id
  // atunci cand faci request la hobbit-ul cu id-ul 1 sa aveti un hobbit valid
  // /hobbits/50 sa primit un 404
});
