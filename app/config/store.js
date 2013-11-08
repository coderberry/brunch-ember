var Store = DS.Store.extend({
  adapter: DS.FixtureAdapter.extend()
});

module.exports = Store;