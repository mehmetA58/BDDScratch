package tests.pageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.interactions.Actions;
import org.testng.Assert;

import java.util.concurrent.TimeUnit;


public class LoginPage extends src.main.framework.ParentPage {
    public LoginPage(WebDriver driver) {
        super(driver);
    }

    public LoginPage searchProductToAmazon(String product) {
        driver.findElement(By.id("twotabsearchtextbox")).sendKeys(product+ Keys.ENTER);
        return this;
    }
    public LoginPage checkForUrlContains(String keyword) throws Exception {

        Thread.sleep(6000);
        Assert.assertTrue(driver.getCurrentUrl().contains(keyword));
        return this;
    }
    public LoginPage clickFirstProduct(int i) {
        driver.findElement(By.xpath("(//span[@class='a-size-base-plus a-color-base a-text-normal'])["+i+"]")).click();
        return this;
    }
    public LoginPage loginHepsiBurada(){
        Actions actions=new Actions(driver);
        actions.moveToElement(driver.findElement(By.xpath("//span[@title='Giriş Yap']"))).perform();
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        driver.findElement(By.xpath("//a[@id='login']")).click();
        driver.findElement(By.xpath("//input[@id='txtUserName']")).click();
        driver.findElement(By.xpath("//input[@id='txtUserName']")).sendKeys("mehmet.akbayir58@gmail.com"+Keys.ENTER);
        driver.findElement(By.xpath("//input[@id='txtPassword']")).click();
        driver.findElement(By.xpath("//input[@id='txtPassword']")).sendKeys();
        return this;
    }
}
