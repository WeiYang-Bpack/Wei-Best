const request = require('supertest')
const app = require("../app");

describe("GET / ", () => {
    test("It should respond with an array of students", async () => {
      const response = await request(app).get("/api/v1/products");
      expect(response.statusCode).toBe(200);
    });
  });
  
