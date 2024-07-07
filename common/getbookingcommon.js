// Ini adalah contoh test api automation menggunakan common js


const { expect } = require("chai");
const request= require("supertest");

const baseUrl= "https://restful-booker.herukapp.com";
const paramFirstName='sally'
const paramLastName='brown'

//Describe the test suite


describe("Get All Booking with param", () => {
    it('Positif-success get all booking with param',async() =>{
        const rensponse= await request(baseUrl)
        .get('/booking'+"?firstname=sally&lastname=brown")

        expect((await response).status).to.equal(200)
    })
})
