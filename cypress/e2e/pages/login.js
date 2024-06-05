export default class login {
    
    static inputLogin(userName, userPass) {
        cy.get('input#user-name').type(userName);
        cy.get('input#password').type(userPass);
    }

    static clickButton() {
        cy.get('[data-test="login-button"]').click();
    }
}
