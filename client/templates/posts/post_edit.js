Template.postEdit.events({
    'submit form': function(e) {
        e.preventDefault();
        
        var currentPostId = this._id;
        
        var postProperties = {
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
        }
        
        Posts.update(currentPostId, {$set: postProperties}, function(error) {
            if (error) {
                //display the error to user
                allert(error.reason);
            } else {
                Router.go('postPage', {_id: currentPostId});
            }
        });
    },
    
    'click .delete': function(e) {
        e.preventDefault();
        
        if (confirm("Delete this class?")) {
            var currentPostId = this._id;
            Post.remove(currentPostId);
            Router.go('postsList');
        }
    }
});