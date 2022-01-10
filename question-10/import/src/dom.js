//responsible for interacting with the DOM
console.log('dom file'); //when running, we know it comes from dom.js

const body = document.querySelector('body');

//writting export keyword infront of variables/functions will tell that they are exportable
const styleBody = () => {
    body.style.background = 'peachpuff';
};

const addTitle = (text) => {
    const title = document.createElement(`h1`); //create h1 tag
    title.textContent = text; //set the text content of gthe title we created
    body.appendChild(title); //append title
};

const contact = 'mario@mail.com';

//multiple exports
export {styleBody, addTitle, contact};