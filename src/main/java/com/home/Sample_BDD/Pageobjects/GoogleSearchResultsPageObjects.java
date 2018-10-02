package com.home.Sample_BDD.Pageobjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.home.Sample_BDD.InitiateWebDriver.InitiateWebDriver;



public class GoogleSearchResultsPageObjects {

	public GoogleSearchResultsPageObjects()
	{
		PageFactory.initElements(InitiateWebDriver.driver, this);		
	}
	
	@FindBy(linkText="Selenium - Web Browser Automation")
	public WebElement seleniumlink;
	
	@FindBy(linkText="Selenium WebDriver")
	public WebElement seleniumwebdriverlink;

}
