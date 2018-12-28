const mainTitle = document.querySelector('.main-title');

document.body.addEventListener('mousemove', (e) => {

    const x = e.clientX;
    const y = e.clientY;

    const width = window.innerWidth;
    const height = window.innerHeight;

    mainTitle.textContent = `${x}, ${y}`;

    const red = x / width * 100;
    const green = y / height * 100;
    const blue = ((x / width) + (x / height)) * 100;

    document.body.style.backgroundColor = `rgb(${red}%, ${green}%, ${blue}%)`;

});