Errors = new Mongo.Collection(null);

throwError = function(message) {
      Errors.insert({
          message: Materialize.toast(message, 4000)
      });
};
