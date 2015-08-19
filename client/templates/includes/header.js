Template.header.rendered = function () {
      $('.button-collapse').sideNav({
      menuWidth: 250, // Default is 240
      closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
    }
  );
};

Template.atNavButtonMat.replaces("atNavButton");