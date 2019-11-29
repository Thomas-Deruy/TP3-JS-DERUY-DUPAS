let DIV = document.getElementById("list");
let TAB = document.createElement("TABLE");
DIV.appendChild(TAB)

DIV.lastElementChild.setAttribute("id", "tableIng");
let tabl = DIV.lastElementChild;
let node = document.createElement("TR");
tabl.appendChild(node);

let firstNode = document.createElement("TH");
tabl.lastElementChild.appendChild(firstNode);
tabl.lastElementChild.lastElementChild.innerHTML = "Name";

let secondNode = document.createElement("TH");
tabl.lastElementChild.appendChild(secondNode);
tabl.lastElementChild.lastElementChild.innerHTML = "Local";

let thirdNode = document.createElement("TH");
tabl.lastElementChild.appendChild(thirdNode);
tabl.lastElementChild.lastElementChild.innerHTML = "Prix";

monModuleTab.monTableauIngredient();
monModuleTab.monTableauPlats();