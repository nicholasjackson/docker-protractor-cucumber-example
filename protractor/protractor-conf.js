exports.config = {
  baseUrl: 'http://www.marksandspencer.com',
  seleniumAddress: 'http://0.0.0.0:4444/wd/hub',
  framework: 'cucumber',
  specs: [
    'features/*.feature'
  ],
  capabilities: {
    'browserName': 'phantomjs',
    'phantomjs.binary.path': '/usr/local/bin/phantomjs',
    'phantomjs.cli.args': ['--cookies-file=/Users/njackson/Documents/Code/Work/docker-protractor-cucumber-example/phantom_cookies.txt'],
    'phantomjs.ghostdriver.cli.args': ['--cookies-file=/Users/njackson/Documents/Code/Work/docker-protractor-cucumber-example/phantom_cookies.txt']
  },
  cucumberOpts: {
    require: 'features/steps/*_steps.js',
    format: 'pretty'
  }
}
