/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'baseview'
], function ($, _, Backbone, JST) {
    'use strict';

    var MembersIndexView = Backbone.BaseView.extend({
        template: JST['app/scripts/templates/members/index.hbs'],

        tagName: 'div',

        className: 'members_index',

        events: {}
    });

    return MembersIndexView;
});
