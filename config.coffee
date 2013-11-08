exports.config =
  # See http://brunch.io/#documentation for docs.
  files:
    javascripts:
      joinTo:
        'javascripts/app.js': /^app/
        'javascripts/vendor.js': /^(bower_components|vendor)/
      order:
        before: [
          'bower_components/jquery/jquery.js'
          'bower_components/handlebars/handlebars.js'
          'bower_components/ember/ember.js'
          'bower_components/ember-data-shim/ember-data.js'
        ]
        
    stylesheets:
      joinTo: 'stylesheets/app.css'

    templates:
      precompile: true
      root: 'templates'
      joinTo: 'javascripts/app.js' : /^app/
