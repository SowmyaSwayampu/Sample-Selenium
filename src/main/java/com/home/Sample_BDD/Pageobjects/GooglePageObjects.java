package com.home.Sample_BDD.Pageobjects;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.home.Sample_BDD.InitiateWebDriver.InitiateWebDriver;



public class GooglePageObjects {

	String browser;
	public GooglePageObjects()
	{
		PageFactory.initElements(InitiateWebDriver.driver,this);
	}
	@FindBy(id = "lst-ib")
	public WebElement googlesearchtextbox;
	
	@FindBy(name = "btnK")
	public WebElement googlesearchbutton;
	
	
	
	public void enter_keyword_in_searchtextbox(String keyword)
	{
		googlesearchtextbox.sendKeys(keyword);
		
	}
	public void clickOnSubmit_Button()
	{
		googlesearchbutton.click();
	}
	
	
}
