Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    waitOn: function() { return Meteor.subscribe('classes'); }
});

Router.route('/', {name: 'classesList'});
Router.route('/page/:_id', {
    name: 'classPage',
    data: function() { return Classes.findOne(this.params._id); }
});