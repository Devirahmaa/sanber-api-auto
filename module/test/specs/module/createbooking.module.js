import request from 'supertest';
import { expect } from 'chai';

const baseUrl = "https://restful-booker.herokuapp.com";

describe("Create booking scenario", function () {
    this.timeout(10000); // Increase the timeout to 10 seconds

    it('Positive - Create Booking', async () => {
        const payload = {
            "firstname": "Jim",
            "lastname": "Brown",
            "totalprice": 111,
            "depositpaid": true,
            "bookingdates": {
                "checkin": "2018-01-01",
                "checkout": "2019-01-01"
            },
            "additionalneeds": "Breakfast"
        };

        try {
            const response = await request(baseUrl)
                .post("/booking")   // endpoint
                .send(payload)      // request body
                .set("Content-Type", "application/json");

            console.log(response.body); // Log the response body
            console.log(response.status); // Log the response status

            expect(response.status).to.equal(418);
        } catch (error) {
            console.error('Error occurred:', error.response ? error.response.text : error.message);
            throw error;
        }
    });
});
