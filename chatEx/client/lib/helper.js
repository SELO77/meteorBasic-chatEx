Template.registerHelper('currentMode', function () {
  if (!Session.get('viewMode')) Session.set('viewMode', 'chatMain');
  return Session.get("viewMode");
});