const assert = require('assert');
const BASE_URL = process.env.BASE_URL;

describe('webdriver.io page', () => {
  it('should have the right title', () => {
    browser.url(BASE_URL);
    const title = browser.getTitle();

    assert.equal(title, 'Docker tests');
  });
});