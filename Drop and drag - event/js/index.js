const square = document.createElement('div');

document.body.appendChild(square);

square.classList.add('main-square');

let divX = 150;
let divY = 50;

square.style.left = `${divX}px`
square.style.top = `${divY}px`

let drawActive = false;

let insertDivX;
let insertDivY;

square.addEventListener('mousedown', (e) => {

    square.style.backgroundColor = `gray`;
    drawActive = !drawActive;

    insertDivX = e.offsetX;
    insertDivY = e.offsetY;

});

square.addEventListener('mousemove', (e) => {

    if (drawActive) {

        divX = e.clientX - insertDivX;
        divY = e.clientY - insertDivY;

        square.style.left = `${divX}px`;
        square.style.top = `${divY}px`;

    }

});

square.addEventListener('mouseup', () => {

    square.style.backgroundColor = `black`;
    drawActive = !drawActive;

});