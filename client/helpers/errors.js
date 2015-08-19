Errors = new Mongo.Collection(null);

throwError = function(message) {
  Errors.insert({messge: message});
};