let size = 10;
let orderElement = 1;

const init = () => {

    const btnAdd = document.createElement('button');
    document.body.appendChild(btnAdd);

    btnAdd.textContent = "Add Element";
    btnAdd.style.cursor = "pointer";

    const btnRemove = document.createElement('button');
    document.body.appendChild(btnRemove);

    btnRemove.textContent = "Remove Element";
    btnRemove.style.cursor = "pointer";
    btnRemove.style.marginLeft = "20px";

    const UlList = document.createElement('ul');
    document.body.appendChild(UlList);

    btnAdd.addEventListener('click', createLiElements);
    btnRemove.addEventListener('click', removeElements);

};

const createLiElements = () => {

    for (let i = 0; i < 10; i++) {

        const liElemenet = document.createElement('li');

        liElemenet.textContent = `Element nr ${orderElement++}`
        liElemenet.style.fontSize = `${size++}px`;

        document.querySelector('ul').appendChild(liElemenet);

    }
};

const removeElements = () => {

    document.querySelector('ul').textContent = '';
    size = 10;
    orderElement = 1;

};

init();