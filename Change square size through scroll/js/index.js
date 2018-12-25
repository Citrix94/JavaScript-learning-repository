const cubeElement = document.createElement('div');

let size = 100;
let grow = true;

cubeElement.classList.add('square');
cubeElement.style.width = size + 'px';
cubeElement.style.height = size + 'px';

document.body.appendChild(cubeElement);

window.addEventListener('scroll', function () {

    if (grow) {
        
        size += 5;
        cubeElement.style.width = size + 'px';
        cubeElement.style.height = size + 'px';
        
    } else {
        size -= 5;
        cubeElement.style.width = size + 'px';
        cubeElement.style.height = size + 'px';
    }

    if (size >= window.innerWidth / 2) {
        grow = !grow;

    } else if (size == 100) {
        grow = !grow;
    }
});