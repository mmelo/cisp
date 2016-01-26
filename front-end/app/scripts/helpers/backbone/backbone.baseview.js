/**
*	@author Miguel Melo
*	@version 1.0.0
*/
/*global define, App*/
define([
	'jquery',
	'underscore',
	'backbone',
	'helpers',
	'templates'
], function ($, _, Backbone, Helpers, JST) {// jshint unused:false
	'use strict';
	/**
	*	Adding base functionality to Backbone's default view
	*
	*	@exports Backbone.BaseView
	*	@extends Backbone.View
	*	@see module:Backbone.View
	*	@author Miguel Melo
	*	@version 1.0.0
	*/
	Backbone.BaseView = Backbone.View.extend({
		subviews: [],
		initialize: function () {
			if ( !this.model ) {
				this.model = new Backbone.Model;
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
});