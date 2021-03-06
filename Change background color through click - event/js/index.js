const mainTitle = document.querySelector('.main-title');

document.body.addEventListener('click', (e) => {

    const x = e.clientX;
    const y = e.clientY;

    mainTitle.textContent = `${x}, ${y}`;

    const color = getColor(e);

    document.body.style.backgroundColor = color;

});

const getColor = (e) => {

    if (e.clientX % 2 === 0) {

        if (e.clientY % 2 === 0) {
            return `red`;
        } else {
            return `green`;
        }

    } else {

        if (e.clientY % 2 === 0) {
            return `green`;
        } else {
            return `blue`;
        }

    }
}