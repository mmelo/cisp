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

    var MemebrsProjectsView = Backbone.CollectionView.extend({
        template: JST['app/scripts/templates/members/memberProject.hbs'],

        tagName: 'section',

        id: 'posts-list-project',

        className: 'posts-list posts-list--members',

        events: {
        },

        subview: MemberProjectView,

    });

    return MemebrsProjectsView;
});
