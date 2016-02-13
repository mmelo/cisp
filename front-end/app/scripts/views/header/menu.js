/*global define*/

define([
	'jquery',
	'underscore',
	'backbone',
	'templates',
	'baseview'
], function ($, _, Backbone, JST) {
	'use strict';

	var MenuView = Backbone.BaseView.extend({
		template: JST['app/scripts/templates/header/menu.hbs'],

		events: {
			'click #menu-close': '_dismiss'
		},

		_dismiss: function (){
			App.Views.Header.$('#menu-button').toggleClass('active');
			App.Views.Header.$('#menu').toggleClass('active');
			App.Views.Header.$('#menu-wrapper').toggleClass('active');
		}
	});

	return MenuView;
});
