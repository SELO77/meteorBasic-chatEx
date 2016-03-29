console.log("messageList.js")

Template.messageList.helpers({
  messages: function() {
    // sort : {(varName):1} 여기서 1은 오름차순
    messagesFromDB = Messages.find({}, {sort: {timeStamp:1}});
    console.log(messagesFromDB)
    return messagesFromDB;
  }
});

// Template.messageList.events({
//   'click button[name=sendMessage]': function (evt, tmpl) {
//     //1. 텍스트 박스 메시지 값 가져오기
//     var txtBox = tmpl.find('input[name="messageText"]');
//     var message = txtBox.value;
//     if (!message) return;

//     //2. 메시지 insert
//     //  table schema가 됨.
//     var messageObj = {
//       timeStamp: (new Date()).getTime(),
//       msg: message,
//       roomId: Session.get('currentRoom'),
//       owner: Meteor.userId(),
//       username: Meteor.user().username,
//       email: Meteor.user().emails[0].address
//     };
//     Messages.insert(messageObj);

//     //TODO: sendting 구현

//     //3. 텍스트 박스 초기화
//     txtBox.value = '';
//     txtBox.focus();
//   }
// })

Template.messageList.onCreated(function(){
  console.log("====Template.messageList.onCreated(function()).this: ",this)
  var instance = this;
  var messagesCount = 30;
  instance.messgesSub = instance.subscribe('messages', Session.get('currentRoom'), messagesCount);
});

Template.messageList.onDestroyed(function(){
  var instance = this;
  instance.messagesSub.stop();
});
