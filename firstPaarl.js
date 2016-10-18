
const assert = require('assert');
var arrayList = [];

var firstPaarl = function(list) {
var stringSplit = list.split(', ');

for (var i = 0; i < stringSplit.length; i++) {
  // console.log(stringSplit[i]);


    if (stringSplit[i].startsWith('CJ')){
      arrayList.push(stringSplit[i]);
  }
}
return arrayList;
}

var storeFunc = firstPaarl('CL 124, CY 567, CL 345, CJ 456, CL 341');
assert.deepEqual(storeFunc, [ 'CJ 456' ])
// firstPaarl('CL 124,CY 567,CL 345, CJ 456,CL 341');
