import Ember from 'ember';

export default Ember.Component.extend({

  railLeft:  { hasRailLeft:  true },
  river:     { hasRiver:     true },
  railRight: { hasRailRight: true },

  didInsertElement() {
    let $children = this.$( '.container' ).children();
    let childLen  = $children.filter( (i, el) => $(el).children().length > 0 ).length;

    this.set( 'elementClassName', `layout-${childLen}` );
  }

});
