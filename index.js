const canvas = document.getElementById('canvas')
let sliderInput = document.getElementById('size-input');
const sizeDisplay = document.getElementById('size-display');
const canvasContainer = document.getElementById('canvas-container');

//known issues: resizing window erases progress


cloneSqr(sliderInput.valueAsNumber);


const canvasSqrAll = document.querySelectorAll('.canvas-sqr');

sizeDisplay.innerHTML = sliderInput.value; // shows initial value of slider, currently hardcorded @ 16 in html
// listens for changes in input on the slider
sliderInput.addEventListener('input', e => {
    // get value of slider
    let val = e.target.valueAsNumber;
    // display value of slider
    sizeDisplay.innerHTML = val

    canvas.innerHTML = '';

    cloneSqr(val);


}); 

// redraws the canvas when the window is resized
window.addEventListener('resize', () => {
    // clears children divs
    canvas.innerHTML = '';
    // create children divs
    cloneSqr(sliderInput.valueAsNumber);
});



function cloneSqr (side) {
    for (let i = 0; i < (side**2); i++) {
        // calcs the size of one side of the canvas
        let canvasSize = canvas.clientWidth / side;

        let canvasSqrClone = document.createElement('div');
        canvas.appendChild(canvasSqrClone);
        canvasSqrClone.classList.add('canvas-sqr');
        canvasSqrClone.style.width = canvasSize + 'px';
        canvasSqrClone.style.height = canvasSize + 'px';
    };
};



function mouseOver (e) {
    e.target.style.backgroundColor = "red";
};


canvas
for (let sqr = 0; sqr < canvasSqrAll.length; sqr++) {
    canvasSqrAll[sqr].addEventListener('mouseover',mouseOver);
}