/*global define*/

define([
	'jquery',
	'underscore',
	'backbone',
	'templates',
	'baseview'
], function ($, _, Backbone, JST) {
	'use strict';

	var ProjectsItemView = Backbone.BaseView.extend({
		template: JST['app/scripts/templates/projects/item.hbs'],

		tagName: 'article',

		id: function () {
			return 'project-' + this.model.get('id');
		},

		className: function () {
			var projectspan = this.model.get('custom_fields')['project-span'];
			return 'project' + (projectspan ? '--' + projectspan[0] : '');
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

	return ProjectsItemView;
});
