Template.signInButton.rendered = function() {
    $(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal-trigger').leanModal({
      dismissible: true,
      complete: function() {
        Router.go('/');
      }
    });
  });
};

Template.signInButton.events({
  'click .logout': function(event){
        event.preventDefault();
        AccountsTemplates.logout();
  }
});