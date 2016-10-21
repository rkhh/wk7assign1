var newHeading = document.createElement("h1");
var newParagraph = document.createElement("p");

newHeading.innerHTML = "DOM Exercise";
newParagraph.innerHTML = "This is my first try at creating a DOM. These can be tricky!";

document.getElementById("overview").appendChild(newHeading);
document.getElementById("overview").appendChild(newParagraph);

newParagraph.setAttribute("align", "center");