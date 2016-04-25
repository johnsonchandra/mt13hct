import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';
// import { AccountsTemplates } from 'meteor/useraccounts:core';

// components
import '../../ui/components/loading.js';
import '../../ui/components/hamburger.js';
import '../../ui/components/phoneComponent.js';

// Import to load these templates
import '../../ui/layouts/app-body.js';
import '../../ui/pages/app-not-found.js';


import '../../ui/pages/home.js';
import '../../ui/pages/faqs.js';
import '../../ui/pages/coba.js';

import '../../ui/pages/login.js';
import '../../ui/pages/signup.js';

// Import to override accounts templates
// import '../../ui/accounts/accounts-templates.js';

FlowRouter.route('/', {
  name: 'App.home',
  action() {
    BlazeLayout.render('App_body', { main: 'home' });
  },
});

FlowRouter.route('/faqs', {
  name: 'faqs',
  action() {
    BlazeLayout.render('App_body', { main: 'faqs' });
  },
});

FlowRouter.route('/login', {
  name: 'login',
  action() {
    BlazeLayout.render('App_body', { main: 'login' });
  },
});

FlowRouter.route('/signup', {
  name: 'signup',
  action() {
    BlazeLayout.render('App_body', { main: 'signup' });
  },
});



FlowRouter.route('/coba', {
  name: 'coba',
  action() {
    BlazeLayout.render('App_body', { main: 'coba' });
  },
});


// the App_notFound template is used for unknown routes and missing lists
FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_body', { main: 'App_notFound' });
  },
};
