export default class homePage {
  static login(url) {
    cy.visit(url);
  }
  static checkImgVisible() {
    cy.get('[alt="Website for automation practice"]').should("be.visible");
  }

  static loggedValidate(name) {
    cy.contains(name).should("be.visible");
  }
  static accountDeleted() {
    cy.contains("Account Deleted!").should("be.visible");
    cy.get('[data-qa="continue-button"]').click();
  }
}
