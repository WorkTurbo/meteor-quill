Package.describe({
    name: 'workturbo:quill',
    version: '0.0.1',
    summary: 'Quill'
})

Npm.depends({
  quill: '1.3.0',
  "quill-emoji": "0.0.9"
})
Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.0')
  api.use(['ecmascript', 'es5-shim']);
  api.export('Quill', 'client')
  api.addFiles('exports.js', 'client')
})

