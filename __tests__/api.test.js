const supertest = require('supertest');
const request = require('supertest');
const express = require("express");
const app = require('../app');
// const request = supertest(app);

describe('API Tests', () => {
  let createdUserId;

  // it('should fetch all users with a GET request to /api/users (expecting an empty array)', async () => {
  //   const response = await request(app).get('/api/users');
  //   expect(response.status).toBe(200);
  //   expect(response.body.status).toBe('success');
  //   expect(response.body.message).toBe('Fetching Details Successfull!');
  //   expect(response.body.result).toEqual([]);
  // });


  // it('should create a new object by a POST api/users request', async () => {
  //   const userData = {
  //     username: 'testUser',
  //     age: 25,
  //     hobbies: ['reading', 'coding'],
  //   };

  //   const response = await request(app).post('/api/users').send(userData);
  //   expect(response.status).toBe(201);
  //   expect(response.body).toHaveProperty('id');
  //   createdUserId = response.body.id; // Save the created user's ID for future tests
  // });

  // it('should get the created record by its id with a GET api/users/{userId} request', async () => {
  //   const response = await request.get(`/api/users/${createdUserId}`);
  //   expect(response.status).toBe(200);
  //   expect(response.body.id).toBe(createdUserId);
  // });

  // it('should update the created record with a PUT api/users/{userId} request', async () => {
  //   const updatedUserData = {
  //     username: 'updatedUser',
  //     age: 30,
  //     hobbies: ['traveling', 'gaming'],
  //   };

  //   const response = await request.put(`/api/users/${createdUserId}`).send(updatedUserData);
  //   expect(response.status).toBe(200);
  //   expect(response.body.id).toBe(createdUserId);
  //   // Additional assertions based on your application logic
  // });

  // it('should delete the created object by id with a DELETE api/users/{userId} request', async () => {
  //   const response = await request.delete(`/api/users/${createdUserId}`);
  //   expect(response.status).toBe(204);
  //   // Additional assertions based on your application logic
  // });

  // it('should get a deleted object by id and return 404 status code with a GET api/users/{userId} request', async () => {
  //   const response = await request.get(`/api/users/${createdUserId}`);
  //   expect(response.status).toBe(404);
  //   // Additional assertions based on your application logic
  // });
});
