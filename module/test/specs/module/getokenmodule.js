import request from 'supertest';
import { expect } from 'chai';
import { createtoken } from './function/createtoken.specs.js';

const baseUrl = "https://restful-booker.herokuapp.com";
let token;

describe("Create token scenario", function () {
    this.timeout(10000); // Increase the timeout to 10 seconds

    it('Positive - Success Create token', async () => {
        const payload = {
            "username": "admin",
            "password": "password123"
        }

        const response = await request(baseUrl)
            .post("/auth")
            .send(payload)
            .set("Content-Type", "application/json");

        console.log(response.body);
        console.log(response.status);

        expect(response.status).to.equal(200);
        token = response.body.token;
        console.log(token);
    });

    it('Positive - Success implement Token', async () => {
        console.log(token);
        expect(token).to.be.a('string');

        const anotherResponse = await request(baseUrl)
            .get("/booking")
            .set("Authorization", `Bearer ${token}`)
            .set("Content-Type", "application/json");

        console.log(anotherResponse.body);
        console.log(anotherResponse.status);

        expect(anotherResponse.status).to.equal(200);
    });

    it('Import token from createtoken', async () => {
        const importedToken = await createtoken();
        console.log(importedToken);
        expect(importedToken).to.be.a('string');
    });
});
