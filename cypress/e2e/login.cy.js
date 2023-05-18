describe("login tests", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  
  it("The app homepage is opened", () => {
    cy.get("#root > nav > div > a > span > span").should(
      "have.text",
      "Books list"
    );
  });

  it("Should log in with valid account data", () => {
    cy.login("test@test.com", "test"); //click Submit button
    cy.get("span.pt-2").should("have.text", "Добро пожаловать test@test.com"); //Favorite page opened
  });

  it("Should not log in with empty username", () => {
    cy.login(null, "test");
    cy.get("#mail")
      .then((elements) => elements[0].checkValidity())
      .should("be.false");

    cy.get("#mail")
      .then((elements) => elements[0].validationMessage)
      .should("contain", "Заполните это поле.");
  });

  it("Should not log in with non-email username", () => {
    cy.login("non-email", "test");
    cy.get("#mail")
      .then((elements) => elements[0].checkValidity())
      .should("be.false");

    cy.get("#mail")
      .then((elements) => elements[0].validationMessage)
      .should("contain", "Адрес электронной почты");
  });

  it("Should not log in with empty password", () => {
    cy.login("test@test.com", null);
    cy.get("#pass")
      .then((elements) => elements[0].checkValidity())
      .should("be.false");

    cy.get("#pass")
      .then((elements) => elements[0].validationMessage)
      .should("contain", "Заполните это поле.");
  });

  // it("Should not log in with invalid password", () => {
  //   cy.contains("Log in").click();
  //   cy.get("#mail").type("test@test.com");
  //   cy.get("#pass").type("invalid");
  //   cy.contains("Submit").click();
  //   cy.contains("Неправильная почта или пароль").should("be.visible");
      // .then((elements) => elements[0].checkValidity())
      // .should("be.false");

  //});
});