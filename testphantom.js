function printCookies(cookies, scope) {
    var i;
    for (i = cookies.length -1; i >= 0; --i) {
        console.log(scope + " - " + JSON.stringify(cookies[i]));
    }
}

var page = require('webpage').create();

page.open('http://www.marksandspencer.com/', function(status) {
  //printCookies(page.cookies,"ALL");
  console.log(status);
  if (status !== 'success') {
        console.log('Unable to load the address!');
        phantom.exit();
  } else {
        window.setTimeout(function () {
            page.render('homepage2.png');
            phantom.exit();
        }, 10000); // Change timeout as required to allow sufficient time
  }
});
