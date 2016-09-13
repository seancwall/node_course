var isValid = true;

if (!isValid) {
  console.log('Data is not valid');
} else {
  console.log('Data is valid');
}

function toggleBoolean(val) {
  if (typeof val === 'boolean') {
    return !val;
  } else {
    console.log('Value is not a boolean');
  }
}

console.log('toggleBoolean(true) = ' + toggleBoolean(true));

console.log('toggleBoolean(\'Sean\') = ' + toggleBoolean('Sean'));
