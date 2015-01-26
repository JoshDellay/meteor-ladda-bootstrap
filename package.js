Package.describe({
  name: 'joshdellay:meteor-ladda-bootstrap',
  summary: ' Ladda bootstrap spinner for meteor ',
  version: '1.0.1',
  git: 'https://github.com/JoshDellay/meteor-ladda-bootstrap/'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.2.1');
  api.addFiles('lib/ladda-themeless.css', 'client');
  api.addFiles('lib/ladda.js', 'client');
  api.addFiles('lib/spin.js', 'client');
});

Package.onTest(function(api) {
  api.use('joshdellay:meteor-ladda-bootstrap');
});
