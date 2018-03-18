"use strict";

var inputs = document.querySelectorAll('input');
var submit = document.querySelector('.button');

var checkValidity = function (input) {
  var validity = input.validity;

  if (validity.rangeOverflow) {
    return false;
  }

  if (validity.rangeUnderflow) {
    return false;
  }

  if (validity.patternMismatch) {
    return false;
  }

  return true;
}

submit.addEventListener('click', function () {
  for (var i = 0; i < inputs.length; i++) {
    var input = inputs[i];

    if (checkValidity(input) === false) {
      input.style.borderColor = 'red';
    }
  }
});
