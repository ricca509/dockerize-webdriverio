var assert = require('assert');

describe('webdriver.io page', function() {
  it('should have the right title', function () {
    browser.url('http://webdriver.io');
    var title = browser.getTitle();
    assert.strictEqual(title, 'WebdriverIO - WebDriver bindings for Node.js');
  });
});
