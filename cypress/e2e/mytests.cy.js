describe("add tests", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.login("test@test.com", "test");
  });
    
  it("1.Favorite page opened", () => {
    cy.get("span.pt-2").should("have.text", "Добро пожаловать test@test.com");
  });

  it("2.Add book and check as favorite", () => {
    cy.contains("Add new").click();
    cy.contains("Book description").should("be.visible");
    cy.get("#title").type("title1").should("have.value", "title1");
    cy.get("#description").type("good").should("have.value", "good");
    cy.get("#authors").type("author1").should("have.value", "author1");
    cy.get('[type="checkbox"]').check()
    cy.contains("Submit").click();
    cy.get(".card-title.h5").should('include.text', 'title1')
    cy.get("p.card-text").should('include.text', 'author1')
    cy.contains("title1").should('be.visible')
    cy.contains("author1").should('be.visible')
    cy.contains('Delete from favorite').click()
    cy.contains('Add to favorite').should('be.visible')
    cy.contains('Favorites').click()
    cy.contains('Please add some book to favorit on home page!').click()
    cy.contains('Add new').should('be.visible').click()
    cy.get('.modal-header .modal-title').should('have.text', 'Book description')
  });

  it("3.Open added book", () => {
    cy.contains("Log out").click();
    cy.contains("Books list").should("be.visible");
    cy.contains("title1").should("be.visible");
    cy.contains("author1").should("be.visible");
  });
});
