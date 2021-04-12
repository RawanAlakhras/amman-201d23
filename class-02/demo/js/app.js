'use strict';

const userName = prompt('Whats you name').toLowerCase();

// alert('Greeting' + userName);
console.log('userName var = ', userName);

function printName(name) {
  // console.log(name);
  let functionName = name;
}

// console.log(functionName);

let classNumber = prompt('What is the class number that you have?');
console.log(classNumber);
// if(userName === 'LANA' && classNumber === '201') {
//   alert('from if condition');
// } else {
//   alert('Please check you answers');
// }


switch(userName) {
case 'sara':
  alert(userName);
  break;
case 'rawan':
  alert(userName);
  break;
default:
  alert('Please check \n your name');
  break;
}
