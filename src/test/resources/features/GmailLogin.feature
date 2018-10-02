Feature: Google Search 


@sanity
Scenario: searching selenium on google
Given user enter to the google home page
When user enter the keyword "selenium" in the search textbox
And  user clicks on search button
Then user should see the page title as "selenium - Google Search"

@Regression
Scenario Outline: google searcg with multiple keywords
Given user enter to the google home page
When user enter the "<keyword>" in the search textbox
And user clicks on search button
Then user should see the expected page title "<expected title>"

Examples:
|keyword|expected title|
|Selenium|Selenium - Google Search|
|Selenium WebDriver|Selenium WebDriver - Google Search|
