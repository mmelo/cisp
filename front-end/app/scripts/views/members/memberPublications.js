/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'views/members/memberPublication',
    'collectionview'
], function ($, _, Backbone, JST, MemberPublicationView) {
    'use strict';

    var MembersPublicationsView = Backbone.CollectionView.extend({
        template: JST['app/scripts/templates/members/memberPublications.hbs'],

        tagName: 'section',

        id: 'posts-list-publications',

        className: 'posts-list posts-list--members',

        events: {
        },

        subview: MemberPublicationView,

    });

    return MembersPublicationsView;
});
