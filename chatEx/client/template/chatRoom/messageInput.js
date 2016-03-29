Template.messageInput.events({
  'click button[name=sendMessage]': function(evt, tmpl) {
    var txtBox = tmpl.find('input[name="messageText"]')
    var message = txtBox.value;
    if(!message) 
      return;
    var messageObj = {
      timeStamp: (new Date()).getTime(),
      msg: message,
      roomId: Session.get('currentRoom'),
      owner: Meteor.userId(),
      username: Meteor.user().username,
      email: Meteor.user().emails[0].address
    }
    Messages.insert(messageObj)

    txtBox.value = '';
    txtBox.focus();
  }
});