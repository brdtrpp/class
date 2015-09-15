Posts = new Mongo.Collection('posts');

Posts.initEasySearch(['title', 'city', 'state', 'zip', 'description', 'author'], {
  'use' : 'mongo-db'
});

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
      "zip",
      "url"
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
      // startTime: String,
      // endTime: String,
      price: String,
      // address1: String,
      // address2: String,
      city: String,
      state: String,
      zip: String,
      url: String
    });

    //prevent duplicates & erroring
    var postWithSameAttributes = Posts.findOne({
      title: postAttributes.title,
      startDate: postAttributes.startDate,
      endDate: postAttributes.endDate,
      city: postAttributes.city,
      state: postAttributes.state,
      price: postAttributes.price,
      zip: postAttributes.zip,
      url: postAttributes.url,
    });

    if (
      postWithSameAttributes
    )
      return {
        postExists: true,
        _id: postWithSameAttributes._id
      };

    var user = Meteor.user();

    var post = _.extend(postAttributes, {
      userId: user._id,
      author: user.username,
      submitted: new Date(),
      commentsCount: 0
      });

    var postId = Posts.insert(post);
    return {
      _id: postId
    };
  },
});

