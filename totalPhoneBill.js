// Write a function called totalPhoneBill that take in a string recording each phone
// call and sms sent and calculate the total bill for the data provided.
//
// In this string 'call, sms, call, sms, sms' there are 2 calls and 3 sms’s.
//  The cost per call is R2.75 and the call per SMS is R0.65. For this data totalPhoneBill should return R7.45
const assert = require('assert');

var totalPhoneBill = function(list) {

    var stringSplit = list.split(',');
    var callCost = 2.75;
    var smsCost = 0.65;

    for (var i = 0; i < stringSplit.length; i++) {







      var charge = totalPhoneBill('call, sms, call, sms, sms');
      assert.deepEqual(charge, 7.45)
        // For this data totalPhoneBill should return R7.45
