/*global define*/

define([
	'jquery',
	'backbone',
	'collections/members',
	'models/members',
	'views/members/index',
	'views/members/item',
	'views/members/detail',
], function ($, Backbone, MembersCollection, MemberModel, MembersListView, MembersItemView, MemberDetailView) {
	'use strict';

	var MembersController = Backbone.Router.extend({
		initialize: function () {
			App.Vent.on('members:index', this._index, this);
			App.Vent.on('members:renderIndex', this._renderIndex, this);
			App.Vent.on('members:detail', this._detail, this);
		},

		/**
		*	_index - fetch and render first list of Members
		*
		*	@private
		*	@function
		*	@param {string} catg (optional)
		*/
		_index: function (catg, searchParams) {
			App.Collections.Members = new MembersCollection;
			App.Collections.Members.catg = catg;
			if ( searchParams) {
				App.Collections.Members.search = searchParams;
			}
			App.Views.Active = new MembersListView({
				collection: App.Collections.Members
			});
			this._renderIndex();
		},

		/**
		*	_loadMore - load another "page" of Members and append it to the current list
		*
		*	@private
		*	@function
		*	@param {string} category (optional)
		*/
		_loadMore: function (catg) {
			App.Collections.Members.page++;
			this._renderIndex();
		},

		/**
		*	_renderIndex - fetch and render list of Members
		*
		*	@private
		*	@function
		*/
		_renderIndex: function (searchParams) {
			App.Collections.Members.fetch({
				remove: false,
				success: function (res) {
					requestAnimationFrame(function () {
						App.Container.html(App.Views.Active.render().el);
						App.Vent.trigger('global:scroll');
					});
				},
				error: function (res, err) {
					requestAnimationFrame(function () {
						App.Container.html(App.Views.Active.render().el);
					});
				}
			});
		},

		/**
		*	_detail - fetch and render member detail page
		*
		*	@private
		*	@function
		*/
		_detail: function (options) {
			var _this = this;

			if ( App.Collections.Members && App.Collections.Members.findWhere({ slug: options.slug }) ) {
				App.Models.Detail = App.Collections.Members.findWhere({ slug: options.slug });
				this._detailView(App.Models.Detail);
			} else {
				App.Models.Detail = new MemberModel;
				App.Models.Detail.set('slug', options.slug);
				App.Models.Detail.fetch({
					success: function () {
						_this._detailView(App.Models.Detail);
					}
				});
			}
		},

		/**
		*	_detailView - render member detail view
		*
		*	@private
		*	@function
		*	@param {object} member - member model to be rendered
		*/
		_detailView: function (member) {
			var _this = this;
			App.Views.Active = new MemberDetailView({
				model: member
			});
			requestAnimationFrame(function () {
				App.Container.html(App.Views.Active.render().el);
			});
		}
	});

	return MembersController;
});
