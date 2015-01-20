Package.describe({
  name: 'subcreative:ladda-spinner',
  summary: ' Ladda bootstrap spinner for meteor ',
  version: '1.0.0',
  git: ' /* Fill me in! */ '
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.2.1');
  api.addFiles('ladda-themeless.css');
  api.addFiles('ladda.js');
  api.addFiles('spin.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('subcreative:ladda-spinner');
  api.addFiles('subcreative:ladda-spinner-tests.js');
});
