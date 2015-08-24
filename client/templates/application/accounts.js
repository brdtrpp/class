AccountsTemplates.configureRoute('signIn');

AccountsTemplates.addField({
    _id: 'username',
    type: 'text',
    required: true,
    func: function(value){
        if (Meteor.isClient) {
            console.log("Validating username...");
            var self = this;
            Meteor.call("userExists", value, function(error, userExists){
                if (!userExists)
                    self.setSuccess();
                else
                    self.setError(userExists);
                self.setValidating(false);
            });
            return;
        }
        // Server
        return Meteor.call("userExists", value);
    },
});

AccountsTemplates.configure({
//     // Behavior
    confirmPassword: true,
    enablePasswordChange: true,
//     forbidClientAccountCreation: false,
//     overrideLoginErrors: true,
//     sendVerificationEmail: true,
//     lowercaseUsername: true,

//     // Appearance
    showAddRemoveServices: true,
//     showForgotPasswordLink: true,
//     showLabels: true,
//     showPlaceholders: true,
//     showResendVerificationEmailLink: true,

//     // Client-side Validation
//     continuousValidation: false,
//     negativeFeedback: false,
//     negativeValidation: true,
//     positiveValidation: true,
//     positiveFeedback: true,
//     showValidating: true,

//     // Privacy Policy and Terms of Use
//     privacyUrl: 'privacy',
//     termsUrl: 'terms-of-use',

//     // Redirects
//     homeRoutePath: '/',
//     redirectTimeout: 4000,


//     // Texts
//     texts: {
//       button: {
//           signUp: "Register Now!"
//       },
//       socialSignUp: "Register",
//       socialIcons: {
//           "meteor-developer": "fa fa-rocket"
//       },
//       title: {
//           forgotPwd: "Recover Your Password"
//       },
//     },
});