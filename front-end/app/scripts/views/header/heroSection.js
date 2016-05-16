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

				//handle special characters of "publicações" word to show on hero section
				data.catg = data.catg === 'publicacoes' ? 'publicações' : data.catg;

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

			if ( this.data.catg === 'home' ) {
				$('#logoHome').addClass('active');
			} else {
				$('#logoHome').removeClass('active');
			}

			return this;
		}
	});

	return FooterView;
});
