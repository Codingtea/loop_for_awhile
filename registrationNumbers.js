// DISPLAY ALL
//
// Given a list of registration numbers, write a function called, displayEachRegNumber,
//  that displays each registration number in the list on a new line.



var  arrayList = [];
var displayEachRegNumber= function (regList) {

  var stringSplit = regList.split(',');



  for (var i = 0; i < stringSplit.length; i++) {
  console.log(stringSplit[i]);
  arrayList.push(stringSplit[i]);
  }

return arrayList //arrayList[]

};



  displayEachRegNumber('CL 124,CY 567,CL 345, CJ 456,CL 341');//regList
















// };
//
// var fromStellies = allFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL');
//
// //fromStellies should contains
// assert.deepEqual(fromStellies, [CL 124, CL 345, CL 341])
//
// var fromKuilsriver = allFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CF');
//
// assert.deepEqual(fromKuilsriver, []);
