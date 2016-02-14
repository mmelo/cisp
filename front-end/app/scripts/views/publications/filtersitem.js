/*global define*/

define([
	'jquery',
	'underscore',
	'backbone',
	'templates',
	'baseview'
], function ($, _, Backbone, JST) {
	'use strict';

	var FiltersItemView = Backbone.BaseView.extend({
		template: JST['app/scripts/templates/publications/filtersitem.hbs'],

		tagName: 'option',

		id: function () {
			return 'filter-' + this.model.get('id');
		},

		className: function () {
			return 'home__section__filter';
		},

		events: {},

		initialize: function () {
			this.listenTo(this.model, 'change', this.render);
			App.Vent.on('global:scroll', this._lazyLoadImage, this);
			this.$el.attr('value', this.model.get('slug'));
		}
	});

	return FiltersItemView;
});
