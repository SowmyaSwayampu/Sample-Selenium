package com.home.SampleBDD.StepDefinitions;


import java.io.IOException;
import java.util.concurrent.TimeUnit;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriverException;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import com.home.Sample_BDD.InitiateWebDriver.InitiateWebDriver;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;


public class Hooks {

@Before()
public void Setup()
{
	String browser = System.getProperty("BROWSER");
	
	if(browser==null)
	{
		browser = System.getenv("BROWSER");
		if(browser == null)
		{
			browser = "firefox";
		}
	}
	switch(browser)
	{
	case "chrome":
		System.setProperty("webdriver.chrome.driver","src/main/resources/chromedriver.exe");
		InitiateWebDriver.driver = new ChromeDriver();
	   break;
	 
	   default:
		System.setProperty("webdriver.chrome.driver", "src/main/resources/geckodriver.exe");
		InitiateWebDriver.driver = new FirefoxDriver();
	    break;
	    	
	}
	
	InitiateWebDriver.driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);
}
	
@After()

public void tearDown(Scenario scenario)throws IOException{
	
	
	if(scenario.isFailed())
	{
	
	try {
		
	scenario.write("Current Page URL is"+ InitiateWebDriver.driver.getCurrentUrl());
	
	byte[] screenshot = ((TakesScreenshot)InitiateWebDriver.driver).getScreenshotAs(OutputType.BYTES);
	scenario.embed(screenshot, "image/png");
	
	}catch (WebDriverException somePlatformsDontSupportScreenshots) {
		System.err.println(somePlatformsDontSupportScreenshots.getMessage());
		
	}
	}
	InitiateWebDriver.driver.quit();
	}
}	
	

	
	

