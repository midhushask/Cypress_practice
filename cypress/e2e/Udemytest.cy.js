describe('Green kart test',()=>{

    it('Add item to cart',()=>{
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get("input[type='search']").type("be")
        cy.get("div.products").find('div.product').each(($el,index,$list) => 
        {
          const veggie =$el.find("div.product-image").text()
          if(veggie.includes('Beans'))
          {
            cy.wrap($el).find('ADD TO CART').click()
          }
        })


      })
})
