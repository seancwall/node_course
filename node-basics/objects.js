var person = {
  gender: 'male',
  'eyeColor': 'brown'
};

person['firstName'] = 'Sean';
person.lastName = 'Wall';
person.age = 48;

delete person.age;
console.log(person);

function greetUser(person) {
  console.log('Hello ' + person.firstName + ' ' + person.lastName + '!');
}

greetUser(person);
