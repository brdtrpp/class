Template.postItem.helpers({
  ownPost: function() {
    return this.userId === Meteor.userId();
  },
  // commentsCount: function() {
  //   return Comments.find({postId: this._id}).count();
  // },
});

Template.postItem.events({
  'click .upvote': function(e) {
    e.preventDefault();
    Meteor.call('upvote', this._id);
  }
});