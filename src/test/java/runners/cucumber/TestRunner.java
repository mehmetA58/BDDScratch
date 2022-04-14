package runners.cucumber;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;
import org.junit.runner.RunWith;


@CucumberOptions(features = "src/test/java/testScenarios",
        tags = "@QuickTest",
        glue = "tests.cucumber" ,
        monochrome = false,
        format = {"pretty", "html:target/cucumber"})

public class TestRunner extends AbstractTestNGCucumberTests {

}

