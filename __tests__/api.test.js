const supertest = require('supertest');
const request = require('supertest');
const app = require('../app');

describe('API Tests', () => {
  let createdUserId;

  it('fetch all users with a GET request to /api/users (expecting an empty array)', async () => {
    const response = await request(app).get('/api/users');
    expect(response.status).toBe(200);
    expect(response.body.status).toBe('success');
  });

  it('create a new object by a POST api/users request', async () => {
    const userData = {
      username: 'testUser',
      age: 25,
      hobbies: ['reading', 'coding'],
    };

    const response = await request(app).post('/api/users').send(userData);
    expect(response.status).toBe(201);
  });

  // it('get the created record by its id with a GET api/users/{userId} request', async () => {
  //   const response = await request(app).get(`/api/users/4`);
  //   expect(response.status).toBe(200);
  // });

  // it('should update the created record with a PUT api/users/{userId} request', async () => {
  //   const updatedUserData = {
  //     username: 'updatedUser',
  //     age: 30,
  //     hobbies: ['traveling', 'gaming'],
  //   };

  //   const response = await request(app).put(`/api/users/4`).send(updatedUserData);
  //   expect(response.status).toBe(200);
  // });

  // it('should delete the created object by id with a DELETE api/users/{userId} request', async () => {
  //   const response = await request(app).delete(`/api/users/4`);
  //   expect(response.status).toBe(204);
  // });

  // it('should get a deleted object by id and return 404 status code with a GET api/users/{userId} request', async () => {
  //   const response = await request(app).get(`/api/users/4`);
  //   expect(response.status).toBe(404);
  // });
});
