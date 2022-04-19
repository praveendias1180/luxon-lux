const { DateTime, Info } = require("luxon");

var m = Info.months("long", { locale: "si" }); 
var w = Info.weekdays("long", { locale: "si" }); 
var l = Info.eras("long", { locale: "si" });

console.log(m)
console.log(w)
console.log(l)

m = Info.months("long", { locale: "fr" }); 
w = Info.weekdays("long", { locale: "fr" }); 
l = Info.eras("long", { locale: "fr" });

console.log(m)
console.log(w)
console.log(l)

m = Info.months("long", { locale: "zh" }); 
w = Info.weekdays("long", { locale: "zh" }); 
l = Info.eras("long", { locale: "zh" });

console.log(m)
console.log(w)
console.log(l)