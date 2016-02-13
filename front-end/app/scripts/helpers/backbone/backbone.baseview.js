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
		initialize: function (data) {
			if ( !this.model ) {
				this.model = new Backbone.Model;
			}
			if ( data ) { //AS - adicionei para poder passar parametros extra para dentro da view (não tenho a certeza se é a forma correcta)
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
});