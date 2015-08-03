Meteor.publish("classes", function(argument) {
    return Classes.find();
});

