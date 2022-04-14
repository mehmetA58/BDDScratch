package tests.cucumber;

import cucumber.api.PendingException;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import tests.pageObjects.LoginPage;

public class LoginStepDefinitions extends src.main.framework.ParentFunctionWeb {

    private LoginPage loginPage=null;


    @Before
    public void beforeScenario() throws Exception {
        openBrowser("https://www.hepsiburada.com/");
        loginPage = new LoginPage(driver);
    }

//    @After
//    public void afterScenario() {
//        quitBrowser();
//    }
    @Given("^I am on the www.amazon.com$")
    public void iAmOnAmazonHomePage() {

    }

    @When("^I am searching for a \"([^\"]*)\"$")
    public void iAmSearchingForA(String product) throws Throwable {
        loginPage.searchProductToAmazon(product);
    }



    @Then("^I'm verifying the \"([^\"]*)\"$")
    public void iMVerifyingThe(String URL) throws Throwable {
     loginPage.checkForUrlContains(URL);
    }

    @And("^I am click Amazon \"([^\"]*)\" Product$")
    public void iAmClickAmazonProduct(int sira) throws Throwable {
        loginPage.clickFirstProduct(sira);
    }

    @Given("^I am on the www\\.hepsiburada\\.com$")
    public void iAmOnTheWwwHepsiburadaCom() {
    }

    @When("^I login to Hepsiburada site\\.$")
    public void iLoginToHepsiburadaSite() {
    loginPage.loginHepsiBurada();
    }
}
