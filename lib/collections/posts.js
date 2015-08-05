Posts = new Mongo.Collection('posts');

Meteor.methods({
    postInsert: function(postAttributes) {
        check(Meteor.userID(), String);
        check(postAttributes, {
            title: String,
            description: String,
            startDate: Date,
            endDate: Date,
            startTime: String,
            endTime: String,
            price: String,
            address1: String,
            address2: String,
            city: String,
            State: String,
            zip: String,
        });
        
        var user = Meteor.user();
        var post = _.extend(postAttributes, {
            userId: user._id,
            author: user.username,
            submitted: new Date()
        });
        var postId = Posts.insert(post);
        return {
            _id: postId
        }
    }
})

