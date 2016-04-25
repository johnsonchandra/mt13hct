import './coba.html';

let putDateToSession = ( date ) => {
	console.log('date',date);
	let tanggalSkg = new Date();
	console.log('tanggalSkg',tanggalSkg);

	let tanggalAmbil = date._d;
	console.log('tanggalAmbil',tanggalAmbil);

	Session.set('ETD', tanggalAmbil);

	$('#Summary').show();
	$('#clndr').hide();

};


Template.coba.onRendered( () => {


});

Template.coba.helpers({
	tanggal(){
		return Session.get('ETD') ? Session.get('ETD') : 'Please choose Date';
	}
});

Template.coba.events({
	'click #ETD'() {
		$('#Summary').hide();

	  $('#clndr').clndr({
			clickEvents: {
		      click: function (target) {
		          console.log('Cal-1 clicked: ', target);
		          putDateToSession(target.date);

		      },
		      today: function () {
		          console.log('Cal-1 today');
		      },
		      nextMonth: function () {
		          console.log('Cal-1 next month');
		      },
		      previousMonth: function () {
		          console.log('Cal-1 previous month');
		      },
		      onMonthChange: function () {
		          console.log('Cal-1 month changed');
		      },
		      nextYear: function () {
		          console.log('Cal-1 next year');
		      },
		      previousYear: function () {
		          console.log('Cal-1 previous year');
		      },
		      onYearChange: function () {
		          console.log('Cal-1 year changed');
		      },
		      nextInterval: function () {
		          console.log('Cal-1 next interval');
		      },
		      previousInterval: function () {
		          console.log('Cal-1 previous interval');
		      },
		      onIntervalChange: function () {
		          console.log('Cal-1 interval changed');
		      }
			}
	   });
	},
});


