// function add (a,b) {
//   return a + b;
// }
//
// console.log(add(3,1));
//
// var toAdd = [9,5];
// //you could do add(toAdd[0], toAdd[1]) but that can get ugly
// console.log(add(...toAdd));
// // ... is the spread operator. it comes before an array and it spreads out the values of the array.


// var groupA = ['sid', 'mandazzi'];
// var groupB = ['karen'];
// var final = [...groupB, 3, ...groupA]; //the spread will spread out the array and they are included in the original array. if you leave off the dots youll get 3 and then an array with sid and mandazzi
//
// console.log(final);

var person = ['Andrew', 25];
var person2 = ['jen', 29];
//hi andrew you are 25  use spread operator
function sayHi (name, age) {
  return 'hi '+name+'. You are ' + age;
}

console.log(sayHi(...person2));

var names = ['mike', 'ben'];
var final = ['sid', ...names];
console.log(final);
function myFunction(item) {
  console.log('hi ' + item);
};
final.forEach(myFunction);
