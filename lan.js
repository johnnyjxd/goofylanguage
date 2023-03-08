/////////////////
// starter shell
/////////////////

var user_start = prompt("enter a token: ");


////////////////
// basic tokens
////////////////


if (user_start == "print") {
  var userprint = prompt("what do you want to print: ");
  console.log(userprint);
}
if (user_start == "if") {
  var userif1 = prompt("enter the number 2 to start:");
  if (userif1 == 2) {
    var userif2 = prompt("enter the statement to be executed: ");
  }
  if (userif2 == "print") {
    var prout = prompt("what do you want to print: ");
    console.log(prout);
  }
}
if (user_start == "var") {
  var localvar = prompt("enter data to store: ");
  console.log("data stored");
}

/////////////
// operators
/////////////

if (user_start = "add") {
  var numa1 = prompt("enter a number: ");
  var numa2 = prompt("enter another number: ")
  var sum = numa1 + numa2
} 
if (user_start == "sub") {
  var nums1 = prompt("enter a number: ");
  var nums2 = prompt("enter another number: ")
  var diff = nums1 - nums2
}
if (user_start == "mult") {
  var numm1 = prompt("enter a number: ");
  var numm2 = prompt("enter another number: ")
  var res = numm1 * numm2
}
if (user_start == "div") {
  var numd1 = prompt("enter a number: ");
  var numd2 = prompt("enter another number: ")
  var quote = numd1 / numd2
}

////////////////
// syntax error
////////////////

else {
    console.log("Invalid Syntax")
}