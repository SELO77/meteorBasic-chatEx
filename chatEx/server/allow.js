Rooms.allow({
    insert: function(userId, doc) {
        return (userId && doc.owner === userId);
    }
});

Messages.allow({
    insert: function(userId, doc) {
        return (userId && doc.owner === userId);
    }
});