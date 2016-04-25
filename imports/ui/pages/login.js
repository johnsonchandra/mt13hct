import './login.html';

let login = ( options ) => {
  _validate( options.form, options.template );
};

let _validate = ( form, template ) => {
  $( form ).validate( validation( template ) );
};

let validation = ( template ) => {
  return {
    rules: {
      emailAddress: {
        required: true,
        email: true
      },
      password: {
        required: true
      }
    },
    messages: {
      emailAddress: {
        required: 'Need an email address here.',
        email: 'Is this email address legit?'
      },
      password: {
        required: 'Need a password here.'
      }
    },
    submitHandler() { _handleLogin( template ); }
  };
};

let _handleLogin = ( template ) => {
  let email    = template.find( '[name="emailAddress"]' ).value,
      password = template.find( '[name="password"]' ).value;

  Meteor.loginWithPassword( email, password, ( error ) => {
    if ( error ) {
      Bert.alert( error.reason, 'warning' );
    } else {
      if(ActiveRoute.name('login'))
      	FlowRouter.go('/home');
    }
  });
};

Template.login.onRendered( () => {
  login( { form: "#login", template: Template.instance() } );
});

Template.login.events({
  'submit form': ( event ) => event.preventDefault()
});
