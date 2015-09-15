// Accounts.ui.config({
//   passwordSignupFields: 'USERNAME_AND_EMAIL'
// });

AccountsTemplates.removeField('password');
AccountsTemplates.removeField('email');
AccountsTemplates.addFields([
  {
      _id: "username",
      type: "text",
      displayName: "username",
      required: true,
      minLength: 5,
  },
  {
      _id: 'email',
      type: 'email',
      required: true,
      displayName: "email",
      re: /.+@(.+){2,}\.(.+){2,}/,
      errStr: 'Invalid email',
  },
  {
      _id: 'username_and_email',
      type: 'text',
      required: true,
      displayName: "Username or Email",
  },
  {
    _id: 'password',
    type: 'password',
    required: true,
    minLength: 6,
    re: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/,
    errStr: 'At least 1 digit, 1 lower-case and 1 upper-case',
  },
]);



// AccountsTemplates.configure({
//     // Behavior
//     confirmPassword: true,
//     enablePasswordChange: true,
//     forbidClientAccountCreation: false,
//     overrideLoginErrors: true,
//     sendVerificationEmail: false,
//     lowercaseUsername: false,
//     focusFirstInput: true,

//     // Appearance
//     showAddRemoveServices: false,
//     showForgotPasswordLink: false,
//     showLabels: true,
//     showPlaceholders: true,
//     showResendVerificationEmailLink: false,

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

//     // Hooks
//     onLogoutHook: myLogoutFunc,
//     onSubmitHook: mySubmitFunc,
//     preSignUpHook: myPreSubmitFunc,

//     // Texts
//     texts: {
//       button: {
//           signUp: "Register Now!"
//       },
//       // socialSignUp: "Register",
//       // socialIcons: {
//       //     "meteor-developer": "fa fa-rocket"
//       // },
//       title: {
//           forgotPwd: "Recover Your Password"
//       },
//     },
// });

