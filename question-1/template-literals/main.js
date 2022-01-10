// Variables 
const title = 'JavaScript tips of 2022';
const author = 'JavaScript Master';
const likes = 50;

//template literal/ template string
let result = `The blog called ${title} by ${author} has ${likes} likes`;
console.log(result);

//HTML template using template literals
let html = `
    <h2>${title}</h2>
    <p>By ${author}</p>
    <span>This blog has ${likes} likes</span>
`;

console.log(html);

//shows the html template in the body
const body = document.querySelector('body');
body.innerHTML = html;
