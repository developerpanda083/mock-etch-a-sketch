// get DOM elements
const canvas = document.getElementById('canvas')
const canvasContainer = document.getElementById('canvas-container');
const settingsContainer = document.getElementById('settings-container');
const smallBtn = document.getElementById('small-btn');
const medBtn = document.getElementById('med-btn');
const largeBtn = document.getElementById('large-btn');
const clearBtn = document.getElementById('clear-btn');
const rainbowBtn = document.getElementById('rainbow-btn');
const colorBtn = document.getElementById('color-btn');
let colorPicker = document.getElementById('color-picker');

//known issues: resizing window erases progress, resizing causes canvas squares to reorganize
// wanting to implement: rotating knobs, slider w/reactive canvas resizing, eraser button and fx, make site look pretty

// set defaults
const defaultColor = 'black';
const defaultMode = 'color';
const defaultSize = 16;

// initialize current settings
let currentColor = defaultColor;
let currentMode = defaultMode;
let currentSize = defaultSize;

// initialize canvas at default size
cloneSqr(defaultSize);

// fx has 1 input and no outputs
// sets current color variable to a new inputted color
function setCurrentColor (newColor) {
    currentColor = newColor;
};

// fx has 1 input and no outputs
// switches modes to inputted mode, and sets current mode to inputted mode
function setCurrentMode (newMode) {
    modeChange(newMode);
    currentMode = newMode;
}

// fx has 1 input and no outputs
// sets current size variable to a new inputted size
function setCurrentSize (newSize) {
    currentSize = newSize;
}

// changes current color to color selected on the color picker
colorPicker.oninput = (e) => setCurrentColor(e.target.value);
// mode changed to color when color button is clicked
colorBtn.onclick = () => setCurrentMode('color');
// mode changed to rainbow when random button is clicked
rainbowBtn.onclick = () => setCurrentMode('rainbow');
// clears canvas and redraws canvas at current size when clear button is clicked
clearBtn.onclick = () => {
    canvas.innerHTML = '';
    cloneSqr(currentSize);
};
// small button click sets size to 3x3
smallBtn.onclick = () => setCurrentSize(3);
// medium button click sets size to 16x16
medBtn.onclick = () => setCurrentSize(16);
// large button click sets size to 25x25
largeBtn.onclick = () => setCurrentSize(25);

// fx has 1 input and no ouputs
// fx draws canvas square divs based on input. size of canvas is input^2
// adds listeners for holding the mouse click and mouse over for each square div
function cloneSqr (side) {
    for (let i = 0; i < (side*side); i++) {
        // calcs the size of one side of the canvas 
        let canvasSize = canvas.clientWidth / side;

        let canvasSqrClone = document.createElement('div');
        canvasSqrClone.classList.add('canvas-sqr');
        // set each div to the calculated size to make each div a square
        canvasSqrClone.style.width = canvasSize + 'px';
        canvasSqrClone.style.height = canvasSize + 'px';

        // listener for mouse over any div
        canvasSqrClone.addEventListener('mouseover', changeColor);
        // listener for click and hold over any div
        canvasSqrClone.addEventListener('mousedown', changeColor);

        // add each div to canvas 
        canvas.appendChild(canvasSqrClone);
    };
};

// flag for if mouse is clicked or not
let mouseDown = false;
// if mouse is clicked anywhere, change flag to true
document.body.onmousedown = () => (mouseDown = true);
// if mouse is un-clicked anywhere, change flag to false
document.body.onmouseup = () => (mouseDown = false);


// fx has 1 input and no outputs. e is event input
// changes colors based on current mode. mode determined by which button pressed
function changeColor (e) {
    // if mouse is over a canvas div, but not clicked, continue
    if (e.type === 'mouseover' && !mouseDown) return;
    // for random mode:
    if (currentMode === 'rainbow') {
        // random rgb. can also use Math.floor
        let randr = (Math.round(Math.random() * 255)).toString();
        let randg = (Math.round(Math.random() * 255)).toString();
        let randb = (Math.round(Math.random() * 255)).toString();
    
        e.target.style.backgroundColor = 'rgb(' + randr + ',' + randg + ',' + randb + ')';
    } else if (currentMode === 'color') {
        // for regular color mode, pick color based on current color
        // current color based on color picker
        e.target.style.backgroundColor = currentColor;
    } 
}


// fx has 1 input and no outputs
// changes modes by adding or removing active class for buttons
function modeChange (newMode) {
    if (currentMode === 'rainbow') {
        rainbowBtn.classList.remove('active');
    } else if (currentMode === 'color') {
        colorBtn.classList.remove('active');
    }

    if (newMode === 'rainbow') {
        rainbowBtn.classList.add('active');
    } else if (newMode === 'color') {
        colorBtn.classList.add('active');
    }
}


// the more divs in the canvas, the smaller the divs in the canvas get.

// if big button is clicked, clear canvas and redraw canvas with each side having 3 divs
smallBtn.addEventListener('click', () => {
    canvas.innerHTML = '';
    cloneSqr(3);
});

// if med button is clicked, clear canvas and redraw canvas with each side having 16 divs
medBtn.addEventListener('click', () => {
    canvas.innerHTML = '';
    cloneSqr(16);
});


// if small button is clicked, clear canvas and redraw canvas with each side having 25 divs
largeBtn.addEventListener('click', () => {
    canvas.innerHTML = '';
    cloneSqr(25);
}); 





