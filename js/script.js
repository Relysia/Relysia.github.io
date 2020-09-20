var helloWorld = "Hi, this is the JavaScript showcase of the \"Relysia Design\" website ";
document.write(helloWorld);
var owner = "Relysia";
var isCool = (owner == "Relysia") ? "Relysia is Cool!" : "Relysia isn't Cool";
document.write(isCool);



function relysiaCool(name) {
    var name = "Riki"
    document.getElementById("test").innerHTML = "Relysia JavaScript! " + name;
}