const supertest = require('supertest');
//const app = require('../../index.js'); // This should correctly import the app from index.js
//const app = require('../index.js'); // Correct path to index.js
//const app = require('../../index.js');
const app = require('../index.js'); // Corrected path to index.js



describe('Item API', () => {
  describe('GET /items', () => {
    it('should return all items', async () => {
      // Make the GET request to your API
      const response = await supertest(app).get('/api/items');
      // Check if the response status code is 200
      expect(response.statusCode).toBe(200);
      // Check if the response body is an array
      expect(Array.isArray(response.body)).toBeTruthy();
      // Add more assertions here to test the contents of the response body
    });
  });

  // You can add more describe blocks here for other endpoints like POST, DELETE, etc.
});
