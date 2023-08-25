describe('Login with  correct credential', ()=>{

    it('Test1-user is loging in',()=>{
        
      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
      cy.get("[name='username']").type("Admin")
      cy.get("[type='password']").type("admin123")
      cy.get("button[type='submit']").click()
      cy.get("[class='oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module']").contains("Dashboard")


    })
})