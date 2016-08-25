function changeImage() {
    var image = document.getElementById('myImage');
    if (image.src.match("bulbon")) {
        image.src = "images/pic_bulboff.gif";
    } else {
        image.src = "images/pic_bulbon.gif";
    }
} // used for image swapping

function textModifier() {
    var x = document.getElementById("textmod");
    x.style.fontSize = "25px";
    x.style.color = "red";
}// used to change color and size of text

function pageLoad() {
    alert("This page has loaded like a Champ!");
}// used to display page loaded alert

function displayDate() {
    document.getElementById("date").innerHTML = Date();
}// used to display the date

function schoolArray() {
    var index;
    var text = "<ul>";
    var classes = ["HTML", "C++", "Windows Essentials", "English 101"];
    for (index = 0; index < classes.length; index++) {
        text += "<li>" + classes[index] + "</li>";
    }
    text += "</ul>";
    document.getElementById("classes").innerHTML = text;
}// array for class lis
