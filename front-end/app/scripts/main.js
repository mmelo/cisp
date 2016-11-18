/**
*	@author Miguel Melo
*	@version 1.0.0
*	@summary: set-up webapps default namespace and objects
*/
/*global App*/
'use strict';

define([
	'backbone',
	'helpers',
	'handlebarsHelpers',
	'models/i18n',
	'routes/router',
	'loadcss'
], function(Backbone, BackboneHelpers, HandlebarsHelpers, I18n, Router, LoadCSS) {
	var baseFolder =  window.location.pathname;//.replace('/','').split('/')[0];

	// App Namespacing
	window.App = {
		Vent: _.extend({}, Backbone.Events),
		Views: {},
		Collections: {},
		Controllers: {},
		Models: {},
		Header: $('#header'),
		Container: $('#app'),
		Footer: $('#footer'),
		BaseUrl: 'http://www.aasilva.com/cisp/back-end/'//EDITAR ISTO PARA APONTAR PARA A INSTALAÇÃO DE WP
		//BaseUrl: 'http://cispbackend.ensp.unl.pt/'
	};

	// Setup DOM manipulation "entry-points"
	App.Window = window;
	App.Document = App.Window.document;
	App.ContainerHeight = App.Window.innerHeight;
	App.Body = $(App.Document.body);

	// Setup Backbone Events
	App.Vent = _.extend({}, Backbone.Events);

	// Setup App Default Entry Route
	App.defaultFirstRoute = '';

	// Setup App Default Page title
	App.defaultTitle = 'GT';

	// Setup App SEO
	App.enableSEO = false;

	// Setup App Internationalization Model
	//App.i18n = new I18n;

	// Setup App User Model
	// App.User.fetch().then(function () {
		// Load main stylesheet asyncronously
		new LoadCSS('styles/main.css');
		new LoadCSS('https://fonts.googleapis.com/css?family=Ubuntu:300,700');
		new LoadCSS('https://fast.fonts.net/cssapi/e531f87f-9101-4e94-963c-77221af84e32.css?ver=1');

		// Setup App Router
		App.Router = new Router;
		Backbone.history.start({// ONLY ACTIVATE PUSHSTATE WHEN IN PRD ENV
			// pushState: true,
			// hashChange: false,
			// root: baseFolder
		});
	// });
});
