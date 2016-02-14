/**
*	@author Miguel Melo
*	@version 1.0.0
*/
/*global define, App*/
define([
	'jquery',
	'underscore',
	'backbone',
	'templates'
], function ($, _, Backbone, Helpers, JST) {// jshint unused:false
	'use strict';
	/**
	*	Adding functionality to Backbone's default View in order to create a true Collection View
	*
	*	@exports Backbone.CollectionView
	*	@extends Backbone.View
	*	@see module:Backbone.View
	*	@author Miguel Melo
	*	@version 1.0.0
	*/
	Backbone.CollectionView = Backbone.View.extend({
		subviews: [],
		initialize: function (obj) {
			this.subview = this.subview || obj.subview || false;
			this.template = this.template || obj.template || false;
			this.data = obj ? obj.data : [];
			this.target = this.target || obj.target || false;
		},
		render: function () {
			var target = this.$el,
				data = this.collection ? this.collection.toJSON() : this.data;

			if (this.template) {
				this.$el.html(this.template(data));
			}

			this.collection.each(function (model) {
				var temp = new this.subview({ model: model });
				this.subviews.push(temp);

				if ( this.target ) {
					this.$el.find(this.target).append(temp.render().el);
				} else {
					this.$el.append(temp.render().el);
				}
			}, this);
			return this;
		},
		onClose: function () {
			for (var i = this.subviews.length - 1; i >= 0; i--) {
				this.subviews[i].close();
			}
		}
	});
});