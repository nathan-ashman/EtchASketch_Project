let sketchpadDiv = document.getElementById("sketchpad");    
function drawSquares(sideSquares=4) {

    for(let i=1; i<=sideSquares; i++){
        let squareRow = document.createElement("div");
        squareRow.className = "square-row";
        sketchpadDiv.appendChild(squareRow);
        for(let i=1; i<=sideSquares; i++){
            let square = document.createElement("div");
            let squareClicked = false;
            square.className = "square-border";
            
            square.addEventListener("click", ()=>{
                squareClicked = true;
                square.addEventListener("mouseover", (e)=>{
                    if(squareClicked){color(square)}
                })
            });
            squareRow.appendChild(square);
        }
    }
}


function color(element) {
    element.style.backgroundColor = "red";
}

function clearAndRedraw(event) {
    let btn = event.target;
    btn.onclick = ()=>{
        
        let sideSquares = prompt("Please enter the number of squares per side for the new grid.");
        if(sideSquares <= 100){
            sketchpadDiv.innerHTML = "";
            drawSquares(sideSquares);
        }else {
            sideSquares = prompt("Please enter the number of squares per side for the new grid.");
        }
    }
    console.log(event);
}