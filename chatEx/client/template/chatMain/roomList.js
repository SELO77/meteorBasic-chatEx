console.log("roomList.js")
//helpers()는 server의 data와 바인딩
Template.roomList.helpers({
  list: function() {
    console.log("==== Template.roomList.helpers()");
    var rooms = Rooms.find();
    console.log(rooms);
    return rooms;
  }
});

// Template.roomList.events({
//   'click button[]'
//     Rooms.insert({
//       _
//     });
// });

Template.roomList.onCreated(function() {
  var self = this;
  self.roomListSub = self.subscribe('roomList');
});

Template.roomListItem.events({
  'click a[name=selectRoom]' : function() {
    Session.set('viewMode', 'chatRoom');
    Session.set('currentRoom', this._id);
  }
});