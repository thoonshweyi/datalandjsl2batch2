// UI
const container = document.querySelector('.container');

const url = 'https://source.unsplash.com/random/';
const rows = 10;

for(let i = 0 ; i < rows * 3 ; i++){
    // console.log(i);
    const img = document.createElement('img');
    img.src = `${url}${getransomsize()}`;
    console.log(img);

    container.appendChild(img);
}

function getrandomnum(){
    return Math.floor(Math.random() * 10) + 300;
}
// console.log(getrandomnum());

function getransomsize(){
    return `${getrandomnum()}x${getrandomnum()}`;
}