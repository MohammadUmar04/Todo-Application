// we make a todofunction :

function addtodo() {
    var getinp = document.getElementById("inp");
    var getUL = document.getElementById("getUL");
    var createli = document.createElement("li");
    var litext = document.createTextNode(getinp.value);
    createli.appendChild(litext);
    getUL.appendChild(createli);
    getinp.value = '';
    var dltbtn = document.createElement("button");
    var textdlt = document.createTextNode("delete");
    dltbtn.appendChild(textdlt);
    createli.appendChild(dltbtn);
    dltbtn.setAttribute("onclick", "dltone(this)");


    var createedit = document.createElement("button");
    var textbutton = document.createTextNode("edit");

    createedit.appendChild(textbutton);
    createedit.setAttribute("onclick", "editItem(this)");
    createli.appendChild(createedit);
    getUL.appendChild(createli);
}

function dltone(abc) {
    abc.parentNode.remove();
}
function deleteall() {
    var getUL = document.getElementById("getUL");
    getUL.innerHTML = '';
}


function editItem(editbtn) {
    var listItem = editbtn.parentNode;
    var textNode = listItem.firstChild; // Yeh maan ke chalo text pehla bacha hai
    var newText = prompt("Enter New Text :", textNode.nodeValue);
    textNode.nodeValue = newText;
}





















