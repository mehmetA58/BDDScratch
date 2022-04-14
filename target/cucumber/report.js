$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("LoginScenario.feature");
formatter.feature({
  "line": 1,
  "name": "Adding product to cart by logging in",
  "description": "",
  "id": "adding-product-to-cart-by-logging-in",
  "keyword": "Feature"
});
formatter.before({
  "duration": 8518361126,
  "error_message": "java.lang.IllegalStateException: The path to the driver executable must be set by the webdriver.opera.driver system property; for more information, see https://github.com/operasoftware/operachromiumdriver. The latest version can be downloaded from https://github.com/operasoftware/operachromiumdriver/releases\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:840)\r\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:134)\r\n\tat org.openqa.selenium.opera.OperaDriverService.access$000(OperaDriverService.java:35)\r\n\tat org.openqa.selenium.opera.OperaDriverService$Builder.findDefaultExecutable(OperaDriverService.java:141)\r\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:355)\r\n\tat org.openqa.selenium.opera.OperaDriverService.createDefaultService(OperaDriverService.java:85)\r\n\tat org.openqa.selenium.opera.OperaDriver.\u003cinit\u003e(OperaDriver.java:115)\r\n\tat src.main.framework.ParentFunctionWeb.openBrowser(ParentFunctionWeb.java:23)\r\n\tat tests.cucumber.LoginStepDefinitions.beforeScenario(LoginStepDefinitions.java:19)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:86)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:643)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:820)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1128)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:129)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:112)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:782)\r\n\tat org.testng.TestRunner.run(TestRunner.java:632)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:366)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:361)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:319)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:268)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1244)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1169)\r\n\tat org.testng.TestNG.run(TestNG.java:1064)\r\n\tat com.intellij.rt.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:66)\r\n\tat com.intellij.rt.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:109)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 4,
  "name": "Successfully Login to Website",
  "description": "",
  "id": "adding-product-to-cart-by-logging-in;successfully-login-to-website",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@QuickTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on the www.hepsiburada.com",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I\u0027m verifying the \"hepsiburada\"",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "I login to Hepsiburada site.",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefinitions.iAmOnTheWwwHepsiburadaCom()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "hepsiburada",
      "offset": 19
    }
  ],
  "location": "LoginStepDefinitions.iMVerifyingThe(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinitions.iLoginToHepsiburadaSite()"
});
formatter.result({
  "status": "skipped"
});
});