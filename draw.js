function drawSquares(numSquares) {
    let sketchpadDiv = document.getElementById("sketchpad");

    for(let i=1; i<=4; i++){
        let squareRow = document.createElement("div");
        squareRow.className = "square-row";
        sketchpadDiv.appendChild(squareRow);
        for(let i=1; i<=4; i++){
            let square = document.createElement("div");
            square.className = "square-border";
            square.addEventListener("mouseover", (e)=>{
                console.log(e);
                square.addEventListener("click", draw(square));
            })
            squareRow.appendChild(square);
        }
    }
}

let squares = document.getElementsByClassName("square-border");
console.log(squares);

function draw(element) {
    element.style.backgroundColor = "red";
}