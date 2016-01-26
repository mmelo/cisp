/*global define*/

define([
    'underscore',
    'backbone',
    'models/page'
], function (_, Backbone, PageModel) {
    'use strict';

    var PagesCollection = Backbone.Collection.extend({
        url: function () {
			return App.BaseUrl + '?json=get_page_index';
		},
		model: PageModel,

		parse: function (res) {
			return res.pages;
		}
    });

    return PagesCollection;
});
