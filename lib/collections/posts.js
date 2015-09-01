Posts = new Mongo.Collection('posts');

Posts.allow({
  update: function(userId, post) { return ownsDocument(userId, post); },
  remove: function(userId, post) { return ownsDocument(userId, post); },
});

Posts.deny({
  update: function(userId, post, fieldNames) {
  // may only edit the following fields:
  return (_.without(fieldNames,
        "title",
        "description",
        "startDate",
        "endDate",
        "startTime",
        "endTime",
        "price",
        "address1",
        "address2",
        "city",
        "state",
        "zip"
    ).length > 0);
  }
});
Meteor.methods({
  postInsert: function(postAttributes) {
    check(this.userId, String);
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
    var postWithSameTitle = Posts.findOne({title: postAttributes.title});
    // var postWithSameStartDate = Posts.findOne({startDate: postAttributes.startDate});
    // var postWithSameEndDate = Posts.findOne({endDate: postAttributes.endDate});
    // var postWithSameStartTime = Posts.findOne({startTime: postAttributes.startTime});
    // var postWithSameEndTime = Posts.findOne({endTime: postAttributes.endtime});

    if (
      postWithSameTitle
      // postWithSameStartDate &&
      // postWithSameEndDate &&
      // postWithSameStartTime &&
      // postWithSameEndTime
    )
      return {
        postExists: true,
        _id: postWithSameTitle._id
      };
    var user = Meteor.user();
    var post = _.extend(postAttributes, {
      userId: user._id,
      author: user.username,
      submitted: new Date(),
      commentsCount: 0,
  		upvoters: [],
  		votes: 0
      });
    var postId = Posts.insert(post);
    return {
      _id: postId
    };
  },
  
  upvote: function(postId) {
    check(this.userId, String);
    check(postId, String);
    var post = Posts.findOne(postId);
    if(!post)
      throw new Meteor.Error('invalid', 'Post not found');
    if(_.include(post.upvoters, this.userId))
      throw new Meteor.Error('invalid', 'User already upvoted this post');
    Posts.update(post._id, {
      $addToSet: {upvoters: this.userId},
      $inc: {votes: 1}
    });
  },



// Posts.attachSchema(new SimpleSchema({
//   title: {
//     type: String,
//     label: "Title",
//     max: 140
//   },
//   description: {
//     type: String,
//     label: "Description",
//     max: 1400
//   },
//   startDate: {
//     type: Date,
//     label: "Date (YYYY-MM-DD)"
//   },

//   address: {
//     type: AddressSchema
//   },

// })
});

