$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("GmailLogin.feature");
formatter.feature({
  "line": 1,
  "name": "Google Search",
  "description": "",
  "id": "google-search",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4524890230,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "searching selenium on google",
  "description": "",
  "id": "google-search;searching-selenium-on-google",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user enter to the google home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enter the keyword \"selenium\" in the search textbox",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user clicks on search button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user should see the page title as \"selenium - Google Search\"",
  "keyword": "Then "
});
formatter.match({
  "location": "GoogleSearch.user_enter_to_the_google_home_page()"
});
formatter.result({
  "duration": 1270170442,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "selenium",
      "offset": 24
    }
  ],
  "location": "GoogleSearch.user_enter_the_keyword_in_the_search_textbox(String)"
});
formatter.result({
  "duration": 99608171,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSearch.user_clicks_on_search_button()"
});
formatter.result({
  "duration": 6812334710,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "selenium - Google Search",
      "offset": 35
    }
  ],
  "location": "GoogleSearch.user_should_see_the_page_title_as(String)"
});
formatter.result({
  "duration": 9493175,
  "status": "passed"
});
formatter.after({
  "duration": 257497007,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 12,
  "name": "google searcg with multiple keywords",
  "description": "",
  "id": "google-search;google-searcg-with-multiple-keywords",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "user enter to the google home page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "user enter the \"\u003ckeyword\u003e\" in the search textbox",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "user clicks on search button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user should see the expected page title \"\u003cexpected title\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "google-search;google-searcg-with-multiple-keywords;",
  "rows": [
    {
      "cells": [
        "keyword",
        "expected title"
      ],
      "line": 19,
      "id": "google-search;google-searcg-with-multiple-keywords;;1"
    },
    {
      "cells": [
        "Selenium",
        "Selenium - Google Search"
      ],
      "line": 20,
      "id": "google-search;google-searcg-with-multiple-keywords;;2"
    },
    {
      "cells": [
        "Selenium WebDriver",
        "Selenium WebDriver - Google Search"
      ],
      "line": 21,
      "id": "google-search;google-searcg-with-multiple-keywords;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3787952956,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "google searcg with multiple keywords",
  "description": "",
  "id": "google-search;google-searcg-with-multiple-keywords;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "user enter to the google home page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "user enter the \"Selenium\" in the search textbox",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "user clicks on search button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user should see the expected page title \"Selenium - Google Search\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "GoogleSearch.user_enter_to_the_google_home_page()"
});
formatter.result({
  "duration": 1129253452,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Selenium",
      "offset": 16
    }
  ],
  "location": "GoogleSearch.user_enter_the_in_the_search_textbox(String)"
});
formatter.result({
  "duration": 70740060,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSearch.user_clicks_on_search_button()"
});
formatter.result({
  "duration": 6504300878,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Selenium - Google Search",
      "offset": 41
    }
  ],
  "location": "GoogleSearch.user_should_see_the_expected_page_title(String)"
});
formatter.result({
  "duration": 29563826,
  "status": "passed"
});
formatter.after({
  "duration": 238155217,
  "status": "passed"
});
formatter.before({
  "duration": 3802217401,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "google searcg with multiple keywords",
  "description": "",
  "id": "google-search;google-searcg-with-multiple-keywords;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "user enter to the google home page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "user enter the \"Selenium WebDriver\" in the search textbox",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "user clicks on search button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user should see the expected page title \"Selenium WebDriver - Google Search\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "GoogleSearch.user_enter_to_the_google_home_page()"
});
formatter.result({
  "duration": 1119097707,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Selenium WebDriver",
      "offset": 16
    }
  ],
  "location": "GoogleSearch.user_enter_the_in_the_search_textbox(String)"
});
formatter.result({
  "duration": 112162774,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSearch.user_clicks_on_search_button()"
});
formatter.result({
  "duration": 6494681819,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Selenium WebDriver - Google Search",
      "offset": 41
    }
  ],
  "location": "GoogleSearch.user_should_see_the_expected_page_title(String)"
});
formatter.result({
  "duration": 15268702,
  "status": "passed"
});
formatter.after({
  "duration": 242080206,
  "status": "passed"
});
});