

describe('Assertion test',()=>{

    it('Implicit assertion',()=>{
     //should,and
     cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
     cy.url().should('include','/login').and('not.contain','abc')
     //cy.url().should('contains','orangehrm')
     
     cy.title().should('eq','OrangeHRM')
     
     cy.get("img[alt='company-branding']").should('be.visible').and('exist')
     

    })
   it('Emplicit assertion',()=>{
      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
      cy.get("[name='username']").type("Admin")
      cy.get("[type='password']").type("admin123")
      cy.get("button[type='submit']").click()

      let expectedname="Paul Collings ";
      cy.get("[class='oxd-userdropdown-name']").then((x)=> {

           let actualname=x.text()
           //BDD style(expect)
           expect(actualname).to.equal(expectedname) 
           //TDD style(assertion)
           assert(actualname,expectedname)
    })
        
   
   
    })

})