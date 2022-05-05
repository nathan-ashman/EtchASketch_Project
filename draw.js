function drawSquares(numSquares) {
    let sketchpadDiv = document.getElementById("sketchpad");
    let clearBtn = document.createElement("button");
    clearBtn.style.width = `100px`;
    clearBtn.style.height = `20px`;
    clearBtn.style["margin-top"] = `100px`;
    clearBtn.innerHTML += "Clear grid";
    
    for(let i=1; i<=4; i++){
        let squareRow = document.createElement("div");
        squareRow.className = "square-row";
        sketchpadDiv.appendChild(squareRow);
        for(let i=1; i<=4; i++){
            let square = document.createElement("div");
            let squareClicked = false;
            square.className = "square-border";
            
            square.addEventListener("click", ()=>{
                squareClicked = true;
                square.addEventListener("mouseover", (e)=>{
                    if(squareClicked){draw(square)}
                })
            });
            squareRow.appendChild(square);
        }
    }
    sketchpadDiv.appendChild(clearBtn);
}

let squares = document.getElementsByClassName("square-border");
console.log(squares);

function draw(element) {
    element.style.backgroundColor = "red";
}