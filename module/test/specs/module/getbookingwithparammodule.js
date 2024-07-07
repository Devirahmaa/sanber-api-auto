import request from 'supertest';
import { expect } from 'chai';

const baseUrl = "https://restful-booker.herokuapp.com";
const paramFirstName = 'sally';
const paramLastName = 'brown';

// Describe the test suite
describe("Get All Booking with Parameters", function () {
    // Increase the timeout for this test suite
    this.timeout(10000); // 10 seconds

    it('Positive - Success in getting all bookings with parameters', async () => {
        const response = await request(baseUrl)
            .get(`/booking?firstname=${paramFirstName}&lastname=${paramLastName}`);

        expect(response.status).to.equal(200);
    });
});
