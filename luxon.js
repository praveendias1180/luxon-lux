const { DateTime } = require("luxon");

var t =DateTime.now().setLocale("el")
  .toLocaleString(DateTime.DATE_FULL); 

console.log(t)

var st =DateTime.now().setLocale("si")
  .toLocaleString(DateTime.DATE_FULL); 

console.log(st)

var ct =DateTime.now().setLocale("ta")
  .toLocaleString(DateTime.DATE_FULL); 

console.log(ct)