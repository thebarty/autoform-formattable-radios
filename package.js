Package.describe({
  name: 'thebarty:autoform-formattable-radios',
  version: '0.0.4',
  // Brief, one-line summary of the package.
  summary: 'Formattable bootstrap-3 radio input-types for meteors autoform',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/thebarty/autoform-formattable-radios',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.use('ecmascript@0.1.5');
  api.use('templating@1.0.0');
  api.use('blaze@2.0.0');
  api.use('aldeed:autoform@5.0.0');
  api.addFiles([
    'boolean-radios/boolean-radios.html',
    'boolean-radios/boolean-radios.js',
    'select-radio/select-radio.html',
    'select-radio/select-radio.js',
    'select-radio-inline/select-radio-inline.html',
    'select-radio-inline/select-radio-inline.js',
  ], 'client');
})
