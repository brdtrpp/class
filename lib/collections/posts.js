Posts = new Mongo.Collection('posts');

Meteor.methods({
  postInsert: function(postAttributes) {
    check(Meteor.userId(), String);
    check(postAttributes, {
      title: String,
      description: String,
      startDate: String,
      endDate: String,
      startTime: String,
      endTime: String,
      price: String,
      address1: String,
      address2: String,
      city: String,
      state: String,
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
    };
  }
});

// Posts.allow({
//     update: function(userId, post) { return ownsDocument(userId, post); },
//     remove: function(userId, post) { return ownsDocument(userId, post); },
//     insert: function(userId, post) { return ownsDocument(userId, post); },
// })

// Meteor.methods({
//     postInsert: function(postAttributes) {
//         check(Meteor.userId(), String);
//         check(postAttributes, {
//             title: String,
//             description: String,
//             startDate: String,
//             endDate: String,
//             startTime: String,
//             endTime: String,
//             price: String,
//             address1: String,
//             address2: String,
//             city: String,
//             state: String,
//             zip: String,
//         });

//     var user = Meteor.user();
//     var post = _.extend(postAttributes, {
//         userId: user._id,
//         author: user.username,
//         submitted: new Date()
//         });
//     var postId = Posts.insert(post);
//     return {
//         id: postId    
//     };  
    
// }});

