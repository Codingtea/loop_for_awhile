
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

var fromStellies = allFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL');

//fromStellies should contains
assert.deepEqual(fromStellies, [CL 124, CL 345, CL 341])

var fromKuilsriver = allFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CF');

assert.deepEqual(fromKuilsriver, []);
