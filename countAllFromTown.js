const assert = require('assert');
    var countAllFromTown = function(list) {
      var stringSplit = list.split(', ');
        var arrayList = [];

        for (var i = 0; i < stringSplit.length; i++) {

          if (stringSplit[i].startsWith('CL')) {
            arrayList.push(stringSplit[i]);
          }
        }
        return arrayList.length
      }

var fromStellies = countAllFromTown('CL 124, CY 567, CL 345, CJ 456, CL 341');
console.log(fromStellies);
assert.deepEqual(fromStellies, 3)
