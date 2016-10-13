
/*global var*/
// const assert = require('assert');
var  arrayList = [];
var shoppingList = function (list) {

  var stringSplit = list.split(',');



  for (var i = 0; i < stringSplit.length; i++) {
  console.log(stringSplit[i]);
  arrayList.push(stringSplit[i]);
  }

return arrayList

};



  shoppingList('1x bread, 6x hotdog rolls, 2x tubs of margarine');


// assert.deepEqual(a []);
