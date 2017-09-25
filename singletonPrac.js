/*
Expected output for 5-17:
true
indestructable
indestructable
*/

var obj = (function () {
	var text = 'will it blend?';
  return {
  	text: text,
    blend: (text === 'will it blend?'),
    assign: function(stuff) {
      this.text = stuff;
    }
  };
})();

var thing1 = obj;
var thing2 = obj;

/*
Expected output for 29-41:
false
will it blend?
indestructable
*/

// var obj = function () {
// 	var text = 'will it blend?';
//   return {
//   	text: text,
//     blend: (text === 'will it blend?'),
//     assign: function(stuff) {
//       this.text = stuff;
//     }
//   };
// };

// var thing1 = new obj();
// var thing2 = new obj();

thing1.assign('indestructable');

console.log(thing1 === thing2);
console.log(thing2.text);
console.log(thing1.text);
