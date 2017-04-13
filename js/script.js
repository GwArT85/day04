console.log("Hello world")

for(var i = 0; i < 10; i++) {
  // console.log(i);
}

for(var i = 0; i < 10; i++) {
  // console.log(i);
}

var i = 11;
while(i < 10){
  // console.log(i);
  i++;
}

var i=11;
do {
  console.log(i);
  i++;
}
while (i < 10);

var jeeps = ['wrangler', 'cherokee', 'grand cherokee', 'compass', 'renegade', 'patriot']
// forEach loop through array
jeeps.forEach(function(item, index){
  console.log(item);
})

//forIn loop through objects

var jeep = {
  make: 'jeep',
  model: 'wrangler',
  year: 2004,
  color: 'black',
  doors: 2
}

for(property in jeep){
  // console.log(property);
  // console.log(jeep[property]);
}

// if else statements
var getTime = new Date().getHours();
if (getTime < 12) {
  alert ("Good morning!");
}else {
  // alert ("Good evening!");
}

// else if, else
var getTime = new Date().getHours();
if (getTime < 12) {
  alert("Good morning!");
} else if (getTime<18) {
  alert("Good afternoon");
}else {
  ("Good evening");
}

//another if statement
for (var i = 0; i <10; i++) {
  if (i === 0) {
    console.log(i + ' is just zero');
  }
  else if (i % 2 === 0) {
    console.log(i + ' is even');
  }else {
    console.log(i + ' is odd');
  }
}

//== vs ===
var num = 1;
var numString = '1';
console.log(num);
console.log(numString);
if (num == numString) {
  console.log('one is one');
}else{
  console.log('one is not one');
}

//=== checks for value and data type
//==checks for value
var num = 1;
var numString = '1';
console.log(num);
console.log(numString);
if (num === numString) {
  console.log('one is one');
}else{
  console.log('one is not one');
}

//other comparison operators
var num = 5;
if (num < 6) {
  console.log("less than");
}else if (num > 6){
  console.log("greater than");
}else if (num <= 12) {
  console.log("less than or equal to");
}else if (num >= 12) {
  console.log("greater than or equal to");
}else {
  console.log("other");
}
