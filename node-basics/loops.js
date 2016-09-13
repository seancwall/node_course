function countDownWhile(start, stop) {
  var i = start;
  while (i >= stop) {
    console.log('while: ' + i);
    i--;
  }
}

function countDownFor(start, stop) {
  var i;

  for (i = start; i >= stop; i--) {
    console.log('for: ' + i);
  }
}

countDownWhile(20, 1);
countDownFor(20, 1);
