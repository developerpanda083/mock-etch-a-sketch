const canvas = document.querySelector('.canvas')
const canvasSquare = document.querySelector('.canvas-square');


function mouseOver () {
    canvasSquare.style.backgroundColor = "red";
}

canvasSquare.addEventListener('mouseover',mouseOver);

for (let i = 1; i < 256; i++) {
    let canvasSqrClone = canvasSquare.cloneNode(true);



    canvas.appendChild(canvasSqrClone);
    
};


