const assert = require('assert');
  var allPaarl = function(list) {
    var stringSplit = list.split(', ');
      var arrayList = [];

        for (var i = 0; i < stringSplit.length; i++) {
    // console.log(stringSplit);
    //
    // var regno = stringSplit[i].trim();
    if (stringSplit[i].startsWith('CJ')) {
      arrayList.push(stringSplit[i]);
    }

  }

  return arrayList.length
}

var regNumberPaarl = allPaarl('CJ 765, CJ 767554 ,CL 124, CY 567, CL 345, CJ 456, CL 341, CJ 234');
console.log("There are " + regNumberPaarl + " number plate from paarl");
assert.deepEqual(regNumberPaarl, 4);
