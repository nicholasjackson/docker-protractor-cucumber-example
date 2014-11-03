exports.config = {
  baseUrl: 'http://www.marksandspencer.com',
  seleniumAddress: 'http://0.0.0.0:4444/wd/hub',
  framework: 'cucumber',
  specs: [
    'features/*.feature'
  ],
  capabilities: {
    'browserName': 'phantomjs',
    'phantomjs.binary.path': '/src/protractor/node_modules/karma-phantomjs-launcher/node_modules/phantomjs/bin/phantomjs',
    'phantomjs.cli.args': ['--cookies-file=/src/phantom_cookies.txt']
  },
  cucumberOpts: {
    require: 'features/steps/*_steps.js',
    format: 'pretty'
  }
}
