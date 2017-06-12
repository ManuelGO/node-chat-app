// Jan 1st 1970 00:00:00 am
// -1000 , representa un segundo antes de la fecha anterior.

var moment = require('moment');

// var date = new Date();
// var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug']
// console.log(months[date.getMonth()]);

var date = moment();
console.log(date.format('h:mm a'));