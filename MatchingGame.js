var numberOfFaces = 5;
var theLeftSide = document.getElementById("leftSide");
var theRightSide = document.getElementById("rightSide");
var theBody = document.getElementsByTagName("body")[0];

function generateFaces() {
    while (theLeftSide.firstChild) {
        theLeftSide.removeChild(theLeftSide.firstChild)
    }
    while (theRightSide.firstChild) {
        theRightSide.removeChild(theRightSide.firstChild)
    }
    for (i = 0; i < numberOfFaces; ++ i) {
        elem_img = document.createElement("img");
        elem_img.src = "image/tumulty.png";
        elem_img.style.top = Math.floor(Math.random() * 401) + "px";
        elem_img.style.left = Math.floor(Math.random() * 401) + "px";
        theLeftSide.appendChild(elem_img);
    }

    leftSideImages = theLeftSide.cloneNode(true);
    leftSideImages.removeChild(leftSideImages.lastChild);
    theRightSide.appendChild(leftSideImages);

    theLeftSide.lastChild.onclick =
        function nextLevel(event){
            event.stopPropagation();
            numberOfFaces += 5;
            generateFaces();
        }
}
generateFaces();

theBody.onclick = function gameOver() {
    alert("Game Over!");
    theBody.onclick = null;
    theLeftSide.lastChild.onclick = null;
};

