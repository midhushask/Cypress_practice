describe('My first test', () => {

    it('test1-verify title-positive', ()=> {
    
     cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
     cy.title().should('eq' ,'OrangeHRM')
    
    })

    it('test1-verify title-negative',() => {
    
     cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
     cy.url().should('include','/login')
    })


})