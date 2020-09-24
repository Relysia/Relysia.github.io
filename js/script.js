// FIRST LINE TEXT START
/* var helloWorld = "Hi, this is the JavaScript showcase of the \"Relysia Design\" website ";
document.write(helloWorld);
var owner = "Relysia";
var isCool = (owner == "Relysia") ? "Relysia is Cool!" + "<br>" : "Relysia isn't Cool" + "<br>";
document.write(isCool);

function relysiaCool(name) {
    var name = "Riki"
    document.getElementById("test").innerHTML = "Relysia JavaScript! " + name;
} */
// FIRST LINE TEXT END

// ARRAY LEARNING START
var courses = ["HTML", "CSS", "JS"];
var x = courses.length;
for (var i=0; i<x; i++){
	document.write(courses[i]);
	document.write("<br>");
};
// ARRAY LEARNING END

// CURRENT TIME START
function printTime() {
    var d = new Date();
    var hours = d.getHours() < 10 ? '0' + d.getHours() : d.getHours();;
    var mins = d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes();
    var secs = d.getSeconds() < 10 ? '0' + d.getSeconds() : d.getSeconds();
    document.getElementById("current-time").innerHTML = hours+":"+mins+":"+secs;
}
setInterval(printTime, 1000);
// CURRENT TIME END

// CHANGE ALL <P> ELEMENT START
// var arr = document.getElementsByTagName("p");
// for (var x = 0; x < arr.length; x++) {
//   arr[x].innerHTML = "Hi there";
// }
// CHANGE ALL <P> ELEMENT END 

// CHANGE THE BACKGROUND COLOR START
function setColor() {
    document.getElementById('schedule').style.backgroundImage = "url('/images/light.jpg')";
    document.getElementById('schedule').style.opacity = "100%";
}
// CHANGE THE BACKGROUND COLOR END

// USER OBJECT START
function user(name, age, country) {
    this.n = name;
    this.a = age;
    this.c = country;
    this.yearOfBirth = bornYear;
    this.changeN = function(name) {
        this.n = name;
    }
}

function bornYear() {
    return 2020 - this.a;
}
// USER OBJECT END

// ADDED USERS START
var p1 = new user("Relysia ", 24, " Hungary");
var p2 = new user("Leonardo ", 70, " Italy");

p1.changeN("Riki ")

document.write(p1.n + p1.a + p1.c + "<br>");
document.write(p2.n + p2.a + p2.c + "<br>");
document.write(p1.yearOfBirth());
// ADDED USERS END