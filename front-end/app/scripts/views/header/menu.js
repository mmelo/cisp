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
			console.log('!');
			App.Views.Header.$('#menu-container').removeClass('active');
			App.Views.Header.$('#menu-button').removeClass('invisible');
			// App.Views.Menu.close();
			// App.Views.Menu = null;

		}
	});

	return MenuView;
});
