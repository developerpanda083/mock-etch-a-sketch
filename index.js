const canvas = document.querySelector('.canvas')
const canvasSquare = document.querySelector('.canvas-square');

for (let i = 1; i < 256; i++) {
    const canvasSqrClone = canvasSquare.cloneNode(true);
    canvas.appendChild(canvasSqrClone);
};