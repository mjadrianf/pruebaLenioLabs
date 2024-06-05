import login from './pages/login.js';

describe('Login Test', () => {
    beforeEach(() => {
        cy.visit('');
    });

    it('1.- Test standar user - Login OK', () => {
        cy.fixture('userData.json').then((userData) => {
            login.inputLogin(userData.estandar_user, userData.common_pass);
            login.clickButton();
            cy.get('.title').should('be.visible');
        });
    }); 

    it('2.- Test standar user - Login No OK - bad Password', () => {
        cy.fixture('userData.json').then((userData) => {
            login.inputLogin(userData.estandar_user, userData.bad_pass);
            login.clickButton();
            cy.get('[data-test="error"]')
                .should('be.visible')
                .and('have.text', 'Epic sadface: Username and password do not match any user in this service');
        });
    });

     it('3.- Test standar user - Login No OK - bad user name', () => {
        cy.fixture('userData.json').then((userData) => {
            login.inputLogin(userData.bad_user, userData.common_pass);
            login.clickButton();
             cy.get('[data-test="error"]')
                .should('be.visible')
                .and('have.text', 'Epic sadface: Username and password do not match any user in this service');
        });
    });

    it('4.- Test locked_out_user - Login OK', () => {
        cy.fixture('userData.json').then((userData) => {
            login.inputLogin(userData.locked_user, userData.common_pass);
            login.clickButton();
            cy.get('[data-test="error"]')
                .should('be.visible')
                .and('have.text', 'Epic sadface: Sorry, this user has been locked out.');
        });
    }); 

     it('5.- Test problem_user - Login OK', () => {
        cy.fixture('userData.json').then((userData) => {
            login.inputLogin(userData.problem_user, userData.common_pass);
            login.clickButton();
            cy.get('.title')
                .should('be.visible')
                .and('have.text', 'Products');
        });
    });

    it('6.- Test performance_glitch_user - Login OK', () => {
        cy.fixture('userData.json').then((userData) => {
            login.inputLogin(userData.performance_glitch_user, userData.common_pass);
            login.clickButton();
            cy.get('.title')
                .should('be.visible')
                .and('have.text', 'Products');
        }); 
    });
});