Classes = new Mongo.Collection('classes');

Classes.allow({
    insert: function(userId, doc) {
        //only allow posting if you are logged in
        return !! userId
    }
})