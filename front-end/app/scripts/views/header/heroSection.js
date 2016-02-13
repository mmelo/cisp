/*global define*/

define([
	'jquery',
	'underscore',
	'backbone',
	'templates',
	'baseview'
], function ($, _, Backbone, JST) {
	'use strict';

	var FooterView = Backbone.BaseView.extend({
		template: JST['app/scripts/templates/header/heroSection.hbs'],

		events: {},

		initialize: function (data) {
			if ( !this.model ) {
				this.model = new Backbone.Model;
			}
			if ( data ) {
				this.data = data;
				this.model.set('data', this.data, {silent: true});
			}
			this.listenTo(this.model, 'change', this.render);
		},
		render: function () {
			var model = {};
			if ( this.model ) {
				model = this.model.toJSON();
			}
			this.$el.html(this.template(model));

			return this;
		}
	});

	return FooterView;
});
