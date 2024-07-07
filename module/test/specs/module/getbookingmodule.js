// Ini adalah contoh test api automation menggunakan common js

import request from 'supertest';
import { expect } from 'chai';

const baseUrl= "https://restful-booker.herokuapp.com";


//Describe the test suite 
describe("Get All Booking", () => {
    it('Positif- success get all booking',async () => {
        const response= await request(baseUrl) //base url
        .get('/booking') //endpoint 

        // Assertion pake chai
        expect((await response).status).to.equal(200)
    })

})

