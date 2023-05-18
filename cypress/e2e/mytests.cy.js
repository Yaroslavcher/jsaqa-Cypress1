describe("add tests", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.login("test@test.com", "test");
  });
    
  it("Favorite page opened", () => {
    cy.get("span.pt-2").should("have.text", "Добро пожаловать test@test.com");
  });

  it("1. add book and check as favorite", () => {
    cy.contains("Add new").click();
    
    cy.contains("Book description").should("be.visible");
    cy.get("#title").type("title1").should("have.value", "title1");
    cy.get("#description").type("good").should("have.value", "good");
    cy.get("#authors").type("author1").should("have.value", "author1");
    // cy.get('[type="checkbox"]')
    //   .not("[disabled]")
    //   .check()
    //   .should("be.checked");
    cy.contains("Submit").click();
  });

  it("2. open added book", () => {
    cy.contains("Log out").click();
    cy.contains("Books list").should("be.visible");
    cy.contains("title1").should("be.visible");
    cy.contains("author1").should("be.visible");
  });

  it("3. open Books list", () => {
    cy.get("div.card-body").click();
    cy.contains("title1").should("be.visible");
    cy.contains("good").should("be.visible");
    cy.contains("author1").should("be.visible");
    cy.contains("Dowload book").should('be.visible').click();
    cy.contains('Not Found').should('be.visible') 
  });   
});
