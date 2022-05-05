function drawSquares(numSquares) {
    let sketchpadDiv = document.getElementById("sketchpad");

    for(let i=1; i<=4; i++){
        let squareRow = document.createElement("div");
        squareRow.className = "square-row";
        sketchpadDiv.appendChild(squareRow);
        for(let i=1; i<=4; i++){
            let square = document.createElement("div");
            square.className = "square-border";
            squareRow.appendChild(square);
        }
    }

    // for(let i=1; i<=16; i++){
    //     let square = document.createElement("div");
    //     square.className = "square-border";
    //     sketchpadDiv.appendChild(square);
    // }

    



}