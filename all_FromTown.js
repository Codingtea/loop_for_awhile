const assert = require('assert');
var allFromTown = function(list) {

  var stringSplit = list.split(',');
  var arrayList = []; //empty arrayList

  for (var i = 0; i < stringSplit.length; i++) {
    var regno = stringSplit[i]

    if (stringSplit[i].startsWith('CL'))
    {
      arrayList.push(stringSplit[i]); //pushing regno into arrayList
    }

  }
return arrayList.length
}

var fromStellies = allFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341', 'CL');

//fromStellies should contains
assert.deepEqual(fromStellies, [CL 124, CL 345, CL 341]);

// var fromKuilsriver = allFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341', 'CF');
//
// assert.deepEqual(fromKuilsriver, []);
