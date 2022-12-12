const canvas = document.querySelector('.canvas')
const canvasSquare = document.querySelector('.canvas-square');


function mouseOver (e) {
    e.target.style.backgroundColor = "red";
}

for (let i = 1; i < 256; i++) {
    let canvasSqrClone = canvasSquare.cloneNode(true);
    canvas.appendChild(canvasSqrClone);
};

const canvasSqrAll = document.querySelectorAll('.canvas-square');

for (let sqr = 1; sqr < canvasSqrAll.length; sqr++) {
    canvasSqrAll[sqr].addEventListener('mouseover',mouseOver);
}