package com.home.SampleBDD.StepDefinitions;

import static org.junit.Assert.assertEquals;


import com.home.Sample_BDD.InitiateWebDriver.InitiateWebDriver;
import com.home.Sample_BDD.Pageobjects.GooglePageObjects;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class GoogleSearch {
  
	GooglePageObjects googlepageobjects = new GooglePageObjects();

	@Given("^user enter to the google home page$")
	public void user_enter_to_the_google_home_page() throws Throwable {
		InitiateWebDriver.driver.get("http://www.google.com");
	}

	@When("^user enter the keyword \"([^\"]*)\" in the search textbox$")
	public void user_enter_the_keyword_in_the_search_textbox(String searchkeyword) throws Throwable {
		googlepageobjects.enter_keyword_in_searchtextbox(searchkeyword);
	}

	@When("^user clicks on search button$")
	public void user_clicks_on_search_button() throws Throwable {
		//Actions action = new Actions(InitiateWebDriver.driver);
	//	action.moveToElement(googlepageobjects.googlesearchbutton).click().build().perform();
		

		googlepageobjects.clickOnSubmit_Button();
		Thread.sleep(5000);
	}

	@Then("^user should see the page title as \"([^\"]*)\"$")
	public void user_should_see_the_page_title_as(String expectedTitle) throws Throwable {
		String actualTitle = InitiateWebDriver.driver.getTitle();
		assertEquals(expectedTitle, actualTitle);
	}

	@When("^user enter the \"([^\"]*)\" in the search textbox$")
	public void user_enter_the_in_the_search_textbox(String searchkeyword2) throws Throwable {
		googlepageobjects.enter_keyword_in_searchtextbox(searchkeyword2);
	}

	@Then("^user should see the expected page title \"([^\"]*)\"$")
	public void user_should_see_the_expected_page_title(String expectedTitle2) throws Throwable {
		String actualTitle2 = InitiateWebDriver.driver.getTitle();
		assertEquals(expectedTitle2, actualTitle2);
	}

}
