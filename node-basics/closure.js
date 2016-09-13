function createAdder(baseNumber) {

  return function(num) {
    return num + baseNumber;
  };

}

var addTen = createAdder(10);

console.log(addTen(2));
console.log(addTen(0));
