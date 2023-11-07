/// <reference types="cypress" />
describe('Context: My First Tests', ()=>{
before(()=>{
    // runs once before all test cases in this describe block, like beforeClass in TestNG.
    
})

beforeEach(()=>{
    // run before each test case, beforeMethod in TestNG.
    cy.clearCookies();
})

after(()=>{
    // similar to afterClass in TestNG runs after all tests finished
})

afterEach(()=>{
    // similar to afterMethod in TestNG
})

it('Opening a Web Application', ()=>{
    cy.visit('/registration_form');
    // cy.get(':nth-child(5) > a')
    // .click();
    // cy.get(':nth-child(9) > a')
    // .click();


})






})