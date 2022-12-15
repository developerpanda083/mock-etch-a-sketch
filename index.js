const canvas = document.getElementById('canvas')
let sliderInput = document.getElementById('size-input');
const sizeDisplay = document.getElementById('size-display');
const canvasContainer = document.getElementById('canvas-container');
const smallBtn = document.getElementById('small-btn');
const medBtn = document.getElementById('med-btn');
const largeBtn = document.getElementById('large-btn');
let colorPicker = document.getElementById('color-picker');
const eraserBtn = document.getElementById('eraser-btn');

//known issues: resizing window erases progress, resizing causes canvas squares to reorganize


cloneSqr(16);




function cloneSqr (side) {
    for (let i = 0; i < (side*side); i++) {
        // calcs the size of one side of the canvas 
        let canvasSize = canvas.clientWidth / side;

        let canvasSqrClone = document.createElement('div');
        canvas.appendChild(canvasSqrClone);
        canvasSqrClone.classList.add('canvas-sqr');
        canvasSqrClone.style.width = canvasSize + 'px';
        canvasSqrClone.style.height = canvasSize + 'px';

        let isClicked = false;

        window.addEventListener('mousedown', () => {isClicked = true});
        window.addEventListener('mouseup', () => {
            if (isClicked == true) {isClicked = false}
        });

        const canvasSqrAll = document.querySelectorAll('.canvas-sqr');

        for (let sqr = 0; sqr < canvasSqrAll.length; sqr++) {
            canvasSqrAll[sqr].addEventListener('mousemove', (e) => {
                if (isClicked == true) {rainbowColor(e)}
            });
        }; 
    };
};

smallBtn.addEventListener('click', () => {
    canvas.innerHTML = '';
    cloneSqr(3);
});

medBtn.addEventListener('click', () => {
    canvas.innerHTML = '';
    cloneSqr(16);
});

largeBtn.addEventListener('click', () => {
    canvas.innerHTML = '';
    cloneSqr(25);
});

eraserBtn.addEventListener('click', (e) => {
    canvas.style.backgroundColor = "white";
});


function mouseMove (e) {
    e.target.style.backgroundColor = colorPicker.value;
};

function rainbowColor (e) {
    let randr = (Math.round(Math.random() * 255)).toString();
    let randg = (Math.round(Math.random() * 255)).toString();
    let randb = (Math.round(Math.random() * 255)).toString();

    e.target.style.backgroundColor = 'rgb(' + randr + ',' + randg + ',' + randb + ')'
}
