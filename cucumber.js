// filepath: c:\Luiz\Outsera\playwright-web-cucumber\cucumber.js
module.exports = {
  default: [
    '--require tests/support/world.js',
    '--require tests/support/hooks.js',
    '--require tests/steps/**/*.js',
    '--format html:reports/cucumber-report.html',
    'tests/features/**/*.feature'
  ].join(' ')
};