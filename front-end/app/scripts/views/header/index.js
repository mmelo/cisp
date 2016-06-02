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
		template: JST['app/scripts/templates/header/index.hbs'],

		tagName: 'section',

		className: 'header__container',

		events: {
			'click #logo': '_returnHome',
			"click #menu-button": '_openMenu'
		},

		/**
		*	_returnHome - navigate to home
		*
		*	@private
		*	@function
		*/
		_returnHome: function () {
			App.Router.navigate('#', { trigger: true });
		},

		/**
		*	_openMenu - open menu
		*
		*	@private
		*	@function
		*/
		_openMenu: function (ev) {
			//App.Views.Header.$('#menu-button').toggleClass('active');
			App.Views.Header.$('#menu').toggleClass('active');
			App.Views.Header.$('#menu-wrapper').toggleClass('active');
		}
	});

	return FooterView;
});
