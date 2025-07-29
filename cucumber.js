module.exports = {
  default: [
    '--require tests/support/world.js',
    '--require tests/support/hooks.js',
    '--require tests/steps/**/*.js',
    'tests/features/**/*.feature'
  ].join(' ')
};