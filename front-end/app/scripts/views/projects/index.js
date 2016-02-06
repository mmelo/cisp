/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'views/projects/item',
    'collectionview'
], function ($, _, Backbone, JST, ProjectItemView) {
    'use strict';

    var ProjectsIndexView = Backbone.CollectionView.extend({
        template: JST['app/scripts/templates/projects/index.hbs'],

        tagName: 'section',

        id: 'projects-list',

        className: 'projects-list',

        events: {},

        subview: ProjectItemView
    });

    return ProjectsIndexView;
});
