describe("making a purchase on the automationpractice website", () => {
  beforeEach(() => {
    cy.visit("http://automationpractice.com/index.php");
  });

  it("searching and adding product to cart", () => {
    cy.get('input[id="search_query_top"]').type("t-shirts: {enter}");
    cy.get(".block_content > :nth-child(3)").click();
    cy.get(".ajax_add_to_cart_button > span").click();
    cy.get(".shopping_cart").should("be.visible");
  });
});
