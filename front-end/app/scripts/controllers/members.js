/*global define*/

define([
	'jquery',
	'backbone',
	'collections/members',
	'collections/memberPosts',
	'models/members',
	'models/memberPosts',
	'views/members/index',
	'views/members/effectiveList',
	'views/members/associatedList',
	'views/members/memberPosts',
	'views/members/memberPost',
	'views/members/detail',
], function ($, Backbone, MembersCollection, MemberPostsCollection, MemberModel, MemberPostsModel, MembersIndexView, EffectiveMembersListView, AssociatedMembersListView, MemberPostsListView, MemberPostsItemView, MemberDetailView) {
	'use strict';
	var MembersController = Backbone.Router.extend({
		initialize: function () {
			App.Vent.on('members:index', this._index, this);
			App.Vent.on('members:renderIndex', this._renderIndex, this);
			App.Vent.on('members:detail', this._detail, this);
			App.Vent.on('members:posts', this._getAllPosts, this);
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
			App.Collections.Members.count = 60;
			if ( searchParams) {
				App.Collections.Members.search = searchParams;
			}
			App.Views.Active = new MembersIndexView;
			requestAnimationFrame(function () {
				App.Container.html(App.Views.Active.render().el);
				App.Vent.trigger('global:scroll');
			});
			this._renderLists();
		},

		/**
		*	_renderIndex - fetch and render list of Members
		*
		*	@private
		*	@function
		*/
		_renderLists: function (searchParams) {
			var _this = this;
			App.Collections.Members.fetch({
				remove: false,
				success: function (res) {
					requestAnimationFrame(function () {
						var effectiveMembers = new Backbone.Collection(App.Collections.Members.filter(function(model) {
						    return !!(_.findWhere(model.get('categories'), {title: 'effective'}));
						}));
						_this._effectiveMembers(effectiveMembers);

						var associatedMembers = new Backbone.Collection(App.Collections.Members.filter(function(model) {
						    return !!(_.findWhere(model.get('categories'), {title: 'associated'}));
						}));
						_this._associatedMembers(associatedMembers);
					});
				},
				error: function (res, err) {
					requestAnimationFrame(function () {
						App.Container.html(App.Views.Active.render().el);
					});
				}
			});
		},

		_effectiveMembers: function (members) {
			App.Views.EffectiveMembers = new EffectiveMembersListView({
				collection: members,
			});
			requestAnimationFrame(function () {
				$('#members-effective').html(App.Views.EffectiveMembers.render().el);
			});
		},

		_associatedMembers: function (members) {
			App.Views.AssociatedMembers = new AssociatedMembersListView({
				collection: members,
			});
			requestAnimationFrame(function () {
				$('#members-associated').html(App.Views.AssociatedMembers.render().el);
			});
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
				_this._getAllPosts();
			} else {
				App.Models.Detail = new MemberModel;
				App.Models.Detail.set('slug', options.slug);
				App.Models.Detail.fetch({
					success: function () {
						_this._detailView(App.Models.Detail);
						_this._getAllPosts();
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
		},

		_getAllPosts: function (slug) {
			slug = 'julian';
			App.Collections.MemberPosts = new MemberPostsCollection;
			App.Collections.MemberPosts.slug = slug;
			App.Views.MemberPosts = new MemberPostsListView({
				collection: App.Collections.MemberPosts,
			});
			this._renderMemberPostsIndex();
		},

		_renderMemberPostsIndex: function () {
			App.Collections.MemberPosts.fetch({
				remove: false,
				success: function (res) {
					requestAnimationFrame(function () {
						$('#member-posts').html(App.Views.MemberPosts.render().el);
						App.Vent.trigger('global:scroll');
					});
				},
				error: function (res, err) {
					// requestAnimationFrame(function () {
					// 	App.Container.html(App.Views.Active.render().el);
					// });
				}
			});
		}
	});

	return MembersController;
});
