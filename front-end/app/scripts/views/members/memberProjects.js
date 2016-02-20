/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'views/members/memberProject',
    'collectionview'
], function ($, _, Backbone, JST, MemberProjectView) {
    'use strict';

    var MembersProjectsView = Backbone.CollectionView.extend({
        template: JST['app/scripts/templates/members/memberProjects.hbs'],

        tagName: 'section',

        id: 'posts-list-projects',

        className: 'posts-list posts-list--members',

        events: {
        },

        subview: MemberProjectView,

    });

    return MembersProjectsView;
});
