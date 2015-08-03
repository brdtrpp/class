Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound',
    waitOn: function() { return Meteor.subscribe('classes'); }
});

Router.route('/', {name: 'classesList'});
Router.route('/page/:_id', {
    name: 'classPage',
    data: function() { return Classes.findOne(this.params._id); }
});
Router.route('/account', {name: 'account'})