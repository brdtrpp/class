Template.notifications.onRendered(function(){
  this.$(".dropdown-button").dropdown({
    constrain_width: false, // Does not change width of dropdown to that of the activator
    hover: true, // Activate on hover
    belowOrigin: true // Displays dropdown below the button
  });
});