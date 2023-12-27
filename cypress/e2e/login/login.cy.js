import homePage from "../../pages/homePage";
import login from "../../pages/login";
import Navbar from "../../pages/navBar";
import { baseUrl } from "/cypress/environments/environment.json";
const newUser = require("/cypress/fixtures/newUser.json");

beforeEach(() => {
  //1. Launch browser
  //2. Navigate to url 'http://automationexercise.com'
  homePage.login(baseUrl);
  //3. Verify that home page is visible successfully
  homePage.checkImgVisible();
});

describe("Test Case 1: Register User", () => {
  it("Register User", () => {
    // 4. Click on 'Signup / Login' button
    Navbar.singupLogin();
    // 5. Verify 'New User Signup!' is visible
    login.checkSingup();
    // 6. Enter name and email address
    login.enterNameEmailNewRegister(newUser.name, newUser.email);
    // 7. Click 'Signup' button
    login.buttonSingup();
    // 8. Verify that 'ENTER ACCOUNT INFORMATION' is visible
    login.newAccountValidate();
    // 9. Fill details: Title, Name, Email, Password, Date of birth
    login.accountDetails(
      newUser.password,
      newUser.day,
      newUser.month,
      newUser.year
    );
    // 10. Select checkbox 'Sign up for our newsletter!'
    login.acceptNewsletter();
    // 11. Select checkbox 'Receive special offers from our partners!'
    login.acceptRecieveSpecial();
    // 12. Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
    login.adressInformation(
      newUser.firstName,
      newUser.lastName,
      newUser.company,
      newUser.address1,
      newUser.address2,
      newUser.country,
      newUser.state,
      newUser.city,
      newUser.zipcode,
      newUser.mobileNumber
    );
    // 13. Click 'Create Account button'
    login.accountCreateButton();
    // 14. Verify that 'ACCOUNT CREATED!' is visible
    login.accountCreateConfirm();
    // 15. Click 'Continue' button
    login.continueButton();
    // 16. Verify that 'Logged in as username' is visible
    homePage.loggedValidate(newUser.name);
    // 17. Click 'Delete Account' button
    Navbar.buttonDeleteUser();
    // 18. Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
    homePage.accountDeleted();
  });
});
