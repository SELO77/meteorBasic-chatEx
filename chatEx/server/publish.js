Meteor.publish('roomList', function() {
  return Rooms.find();
});

Meteor.publish('messages', function(roomId, count){
  if (!roomId) {
    console.error('찾을수 없는 채팅방 입니다.', count);
  }
  else {
    //console.log(Messages)
    return Messages.find({roomId: roomId}, {sort: {timeStamp: -1}, limit:count});
  }
});