/*global define*/

define([
	'jquery',
	'underscore',
	'backbone',
	'templates',
	'baseview'
], function ($, _, Backbone, JST) {
	'use strict';

	var EventsItemView = Backbone.BaseView.extend({
		template: JST['app/scripts/templates/home/eventsItem.hbs'],

		tagName: 'article',

		id: function () {
			return 'new-' + this.model.get('id');
		},

		className: function () {

			return this.model.get('isLarge') && this.model.get('thumbnail') ? 'home__section__new home__section__new--large' : 'home__section__new';
		},

		events: {},

		initialize: function () {
			this.listenTo(this.model, 'change', this.render);
			App.Vent.on('global:scroll', this._lazyLoadImage, this);
		},

		/**
		*	_lazyLoadImage - only load images above the fold
		*
		*	@private
		*	@function
		*/
		_lazyLoadImage: function () {
			var pos = Math.abs(this.$el[0].getBoundingClientRect().top);
			if ( pos < App.ContainerHeight && !this.model.get('inCache')) {
				this.model.set('inCache', true);
			}
		}
	});

	return EventsItemView;
});
