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

it.skip('Test1 Opening a Web Application', ()=>{
    cy.visit('/registration_form');
    // cy.get(':nth-child(5) > a')
    // .click();
    // cy.get(':nth-child(9) > a')
    // .click();
})

xit('Test2', ()=>{
    expect(false).to.equal(false);
})

it('Test3', ()=>{
    expect(false).not. to.equal(true);
})

it('Test4', ()=>{
    expect(5).to.equal(5);
})
it('Test5', ()=>{
    expect(true). to.equal('5'==5);
})






})