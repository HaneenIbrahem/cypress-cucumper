import { should } from "chai";

export default class LoginPage{
    elements = {
        userName: () => cy.get('[placeholder = "Username"]'),
        password: () => cy.get('[placeholder = "Password"]'),
        loginBtn: () => cy.get('button'),

        //logout
        logout: () => cy.get('.oxd-userdropdown-name'),

    }

    login (userName: string, password: string){
        this.elements.userName().type(userName);
        this.elements.password().type(password);
        this.elements.loginBtn().click();
    }
    logout(){
        this.elements.logout().click({ force: true })
        cy.contains('Logout').click({ force: true })
    }
   
}