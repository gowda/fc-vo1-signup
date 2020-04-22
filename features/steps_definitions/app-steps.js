import { By, until } from 'selenium-webdriver';
import {
  Given, Then, After,
} from 'cucumber';

import * as seleniumWebdriver from 'selenium-webdriver';
import * as chrome from 'selenium-webdriver/chrome';
import { expect } from 'chai';

require('chromedriver');

After(function() {
  if (this.driver) {
    return this.driver.quit().then((resp) => {
      this.driver = null;
      return resp;
    });
  }

  return null;
});

Given('I navigate to the url {string}', function(url) {
  const chromeOptions = new chrome.Options().headless();
  chromeOptions.addArguments('window-size=1440,900');

  this.driver = new seleniumWebdriver.Builder()
    .withCapabilities(seleniumWebdriver.Capabilities.chrome())
    .setChromeOptions(chromeOptions)
    .build();

  return this.driver.get(url);
});

Then('I should see the field {string}', function(expected) {
  const world = this;

  return world.driver.wait(until.elementsLocated(By.tagName('label')))
    .then((nodes) => Promise.all(nodes.map((n) => n.getText())))
    .then((labels) => expect(labels.some((l) => l === expected)).to.be.true);
});

Then('I should see a radio button with {string}', function(expected) {
  const world = this;

  // FIXME: also check for a radio button for each label
  return world.driver.wait(until.elementsLocated(By.tagName('label')))
    .then((nodes) => Promise.all(nodes.map((n) => n.getText())))
    .then((labels) => expect(labels.some((l) => l === expected)).to.be.true);
});
