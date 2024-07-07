import request from 'supertest';

const baseUrl = "https://restful-booker.herokuapp.com";

export const createtoken = async () => {
    const payload = {
        "username": "admin",
        "password": "password123"
    }

    const response = await request(baseUrl)
        .post("/auth")
        .send(payload)
        .set("Content-Type", "application/json");

    if (response.status === 200) {
        return response.body.token;
    } else {
        throw new Error('Failed to create token');
    }
};
