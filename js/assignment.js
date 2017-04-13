var name = prompt("What is your name?");
alert("Hello " + name + "!");
var decision1 = prompt("You see a haunted house. Go *big* or go *home*?");
if (decision1 === "big"){
  var doors = prompt("You went big. You have followed your heart. It's too bad that your heart is now pounding out of your chest. This place is spooky to say the least. You see two doors, which door do you choose, the *first* or the *second*");
}else if (decision1 === "home"){
  alert("You went home. I bet you voted for Reagan too.");
}
if (doors === "first"){
  alert("You ended up in hell, " + name + ".")
}else if (doors === "second"){
  alert("You have gone through the second door, do you want a cookie?")
}
