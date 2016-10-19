const assert = require('assert');
var arrayList = [];  //empty arrayList


var allPaarl = function(list) {
  var stringSplit = list.split(',');

  for (var i = 0; i < stringSplit.length; i++) { //loop
    // console.log(stringSplit);

    var regno = stringSplit[i].trim(); //the result of the loop regno

    arrayList.push(regno);            //pushing regno into arrayList
  }

  return arrayList
}

var regNumberPaarl = allPaarl('CJ 765 ,CL 124, CY 567, CL 345, CJ 456, CL 341, CJ 234');


assert.deepEqual(regNumberPaarl, [ 'CJ 765',
  'CL 124',
  'CY 567',
  'CL 345',
  'CJ 456',
  'CL 341',
  'CJ 234' ]);
