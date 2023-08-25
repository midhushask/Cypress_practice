
describe('Pop up',()=>{

    it('Alert op up',()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsAlert()']").click();
    
    })


})