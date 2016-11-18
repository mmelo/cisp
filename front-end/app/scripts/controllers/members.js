/*global define*/

define([
	'jquery',
	'backbone',
	'collections/members',
	'collections/memberPublications',
	'collections/memberProjects',
	'models/members',
	'views/members/index',
	'views/members/effectiveList',
	'views/members/associatedList',
	'views/members/memberPublications',
	'views/members/memberProjects',
	'views/members/detail'
], function ($, Backbone, MembersCollection, MembersPublicationsCollection, MembersProjectsCollection, MemberModel, MembersIndexView, EffectiveMembersListView, AssociatedMembersListView, MemberPublicationsView, MemberProjectsView, MemberDetailView) {
	'use strict';
	var MembersController = Backbone.Router.extend({
		initialize: function () {
			App.Vent.on('members:index', this._index, this);
			App.Vent.on('members:renderIndex', this._renderIndex, this);
			App.Vent.on('members:detail', this._detail, this);
			// App.Vent.on('members:posts', this._getAllPosts, this);
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
				// _this._getAllPosts();
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
			//console.log(member.toJSON())
			requestAnimationFrame(function () {
				App.Container.html(App.Views.Active.render().el);
				setTimeout(function () {
					_this._getMemberPublications(member.get('slug'));
					_this._getMemberProjects(member.get('slug'));
				}, 200);
			});
		},

		_getMemberPublications: function (slug) {
			App.Collections.MemberPublications = new MembersPublicationsCollection;
			App.Collections.MemberPublications.slug = slug;
			App.Views.MemberPublications = new MemberPublicationsView({
				collection: App.Collections.MemberPublications
			});
			this._renderMemberPublications();

		},

		_renderMemberPublications: function () {
			App.Collections.MemberPublications.fetch({
				remove: false,
				success: function (res) {
					//console.log(App.Collections.MemberPublications.toJSON());
					//requestAnimationFrame(function () {
						$('#member-publications').html(App.Views.MemberPublications.render().el);
						App.Vent.trigger('global:scroll');
					//});
				},
				error: function (res, err) {
					requestAnimationFrame(function () {
						$('#member-publications').html(App.Views.MemberPublications.render().el);
						App.Vent.trigger('global:scroll');
					});
				}
			});
		},

		_getMemberProjects: function (slug) {
			App.Collections.MemberProjects = new MembersProjectsCollection;
			App.Collections.MemberProjects.slug = slug;
			App.Views.MemberProjects = new MemberProjectsView({
				collection: App.Collections.MemberProjects
			});
			this._renderMemberProjects();
		},

		_renderMemberProjects: function () {
			App.Collections.MemberProjects.fetch({
				remove: false,
				success: function (res) {
					//console.log(App.Collections.MemberProjects.toJSON());
					//requestAnimationFrame(function () {
						$('#member-projects').html(App.Views.MemberProjects.render().el);
						App.Vent.trigger('global:scroll');
					//});
				},
				error: function (res, err) {
					requestAnimationFrame(function () {
						$('#member-projects').html(App.Views.MemberProjects.render().el);
						App.Vent.trigger('global:scroll');
					});
				}
			});
		}
	});

	return MembersController;
});
