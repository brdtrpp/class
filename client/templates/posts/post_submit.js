Template.postSubmit.events({
  'submit form': function(e) {
    e.preventDefault();

    var post = {
        title: $(e.target).find('[name=title]').val(),
        description: $(e.target).find('[name=description]').val(),
        startDate: $(e.target).find('[name=startDate]').val(),
        endDate: $(e.target).find('[name=endDate]').val(),
        startTime: $(e.target).find('[name=startTime]').val(),
        endTime: $(e.target).find('[name=endTime]').val(),
        price: $(e.target).find('[name=price]').val(),
        address1: $(e.target).find('[name=address1]').val(),
        address2: $(e.target).find('[name=address2]').val(),
        city: $(e.target).find('[name=city]').val(),
        state: $(e.target).find('[name=state]').val(),
        zip: $(e.target).find('[name=zip]').val()
    };

    Meteor.call('postInsert', post, function(error, result) {
      // display the error to the user and abort
      if (error)
        return throwError(error.reason);
      
      // show this result but route anyway
      if (result.postExists)
        throwError('This class has already been posted');
      
      Router.go('postPage', {_id: result._id});  
    });
  }
});

Template.postSubmit.rendered = function () {
  $(document).ready(function(){
    $('.collapsible').collapsible({
      // accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });
  });
};
