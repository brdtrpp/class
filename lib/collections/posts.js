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
    
    //prevent duplicates & erroring
    var postWithSameTitle = Posts.findOne({title: postAttributes.title})
    var postWithSameStartDate = Posts.findOne({startDate: postAttributes.startDate})
    var postWithSameEndDate = Posts.findOne({endDate: postAttributes.endDate})
    var postWithSameStartTime = Posts.findOne({startTime: postAttributes.startTime})
    var postWithSameEndTime = Posts.findOne({endTime: postAttributes.endtime})
    
    if (
      postWithSameTitle  &&
      postWithSameStartDate  &&
      postWithSameEndDate  &&
      postWithSameStartTime &&
      postWithSameEndTime
      )
      return {
        postExists: true,
        _id: postWithSameTitle._id
      }
    
    
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


