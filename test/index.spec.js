const assert = require('assert');
const BASE_URL = process.env.BASE_URL;

describe('webdriver.io page', () => {
  it('should have the right title', () => {
    console.log(`Testing ${BASE_URL}`);

    browser.url(BASE_URL);
    const title = browser.getTitle();
    assert.equal(title, 'app');
  });
});