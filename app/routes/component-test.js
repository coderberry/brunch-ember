var ComponentTestRoute = Ember.Route.extend({
  model: function() {
    return ['purple', 'green', 'orange'];
  }
});

module.exports = ComponentTestRoute;
