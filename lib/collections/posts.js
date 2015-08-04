Posts = new Mongo.Collection('posts');

Meteor.methods({
    postInsert: function(postAttributes) {
        check(Meteor.userID(), String);
        check(postAttributes, {
            title: String,
        })
    }
})

