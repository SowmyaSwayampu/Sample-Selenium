package com.home.SampleBDD.StepDefinitions;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/resources/features", glue = "com.home.SampleBDD.StepDefinitions", dryRun = false, plugin = {
		"html:target/cucumber-html-report", "json:target/cucumber.json", "pretty:target/cucumber-pretty.txt",
		"usage:target/cucumber-usage.json", "junit:target/cucumber-results.xml",
		"com.cucumber.listener.ExtentCucumberFormatter:" })

public class TestRunner {

}
