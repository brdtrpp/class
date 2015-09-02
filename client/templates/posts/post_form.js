Template.postForm.rendered = function () {
  $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15 // Creates a dropdown of 15 years to control year
  });
  $('.pick-a-time').lolliclock({autoclose:true});
  $(document).ready(function(){
    $('.collapsible').collapsible({
      // accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });
  });
};

Template.postForm.helpers({
  ownPost: function() {
    return this.userId === Meteor.userId();
  },
  // commentsCount: function() {
  //   return Comments.find({postId: this._id}).count();
  // },
});