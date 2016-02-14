/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'views/members/memberpost',
    'collectionview'
], function ($, _, Backbone, JST, MemberPostView) {
    'use strict';

    var MembersPostsView = Backbone.CollectionView.extend({
        template: JST['app/scripts/templates/members/memberPosts.hbs'],

        tagName: 'section',

        id: 'posts-list',

        className: 'posts-list posts-list--members',

        events: {
        },

        subview: MemberPostView,

    });

    return MembersPostsView;
});
