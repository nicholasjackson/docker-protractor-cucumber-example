//http://chaijs.com/
var chai = require('chai');

var fs = require('fs');

//https://github.com/domenic/chai-as-promised/
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var expect = chai.expect;

module.exports = function() {

  //var ptor = protractor.getInstance();

  this.Given(/^I go on "([^"]*)"$/, function (url, callback) {
    browser.ignoreSynchronization = true;
    browser.get('http://www.marksandspencer.com');
    callback()
  });

  this.Then(/^the title should equal "([^"]*)"$/, function (title, callback) {
    expect(browser.getTitle()).to.eventually.equal(title).and.notify(callback);
  });

  this.Then(/^i take a screenshot "([^"]*)"$/, function (filename, callback) {
    browser.takeScreenshot().then(function (png) {
      var stream = fs.createWriteStream(filename);

      stream.write(new Buffer(png, 'base64'));
      stream.end();
      callback();
    });
  });

  this.Then(/^the menu should contain "([^"]*)"$/, function (item, callback) {
    element.all(by.css('.account-info')).then(function(elements) {
        browser.takeScreenshot().then(function (png) {
          var stream = fs.createWriteStream("./screenshots/homepage2.jpg");

          stream.write(new Buffer(png, 'base64'));
          stream.end();
          expect(elements).to.have.length(1);
          callback();
        });
    });
  });
}
