var moment = require('moment');

console.log(moment().format());

var now = moment();
console.log('current time stamp', now.unix());

var timestamp = 1483429224;

var currentMoment = moment.unix(timestamp);
console.log('currentMoment' , currentMoment.format('MMM D, YY @ h:mm a'));

//jan 3rd, 2016 @ 12:13 AM

console.log('formatted date', currentMoment.format('MMMM Do, YYYY @ h:mm A'));
