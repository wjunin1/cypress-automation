export default class Navbar {
  static singupLogin() {
    cy.get(".fa-lock").click();
  }

  static buttonDeleteUser() {
    cy.contains(" Delete Account").click();
  }

  static logoutButton() {
    cy.contains(" Logout").click();
  }

  static contactUs() {
    cy.contains(" Contact us").click();
  }

  static productPage() {
    cy.contains(" Products").click();
  }

  static cartPage() {
    cy.contains(" Cart").click();
  }
}
