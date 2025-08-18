module.exports = {
  default: [
    '--require-module ts-node/register',
    '--require test/steps/**/*.ts',
    '--require test/support/**/*.ts',
    '--format json:test/test-results/report.json', 
    // '--publish-quiet',
    'test/features/**/profile.feature'
  ].join(' ')
};