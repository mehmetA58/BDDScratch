package src.main.framework;



import io.github.bonigarcia.wdm.managers.ChromeDriverManager;
import io.github.bonigarcia.wdm.managers.OperaDriverManager;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.opera.OperaDriver;

import java.net.MalformedURLException;

public class ParentFunctionWeb {

    public static WebDriver driver;
    public static void openBrowser(String url) throws MalformedURLException {

        ChromeDriverManager.getInstance().setup();
        driver = new ChromeDriver();
        driver.get(url);
        driver.manage().window().maximize();
        OperaDriverManager.getInstance().setup();
        driver=new OperaDriver();
        driver.get(url);
        driver.manage().window().maximize();

    }

    protected static void quitBrowser() {

        for (String winHandle : driver.getWindowHandles()) {
            try {
                driver.switchTo().window(winHandle);
                driver.close();
                driver.quit();
            } catch (Exception e) {
            }
        }
    }





}

