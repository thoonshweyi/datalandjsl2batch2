//UI
const imagecontainer = document.querySelector('.imagecontainer');
const modal = document.querySelector('.modal');
const modalimage = document.querySelector('.modalimage');
const leftbtn = document.querySelector('.leftbtn'),
        rightbtn = document.querySelector('.rightbtn');


const rows = 3,
        cols = 4;
    
const url = `https://source.unsplash.com/random/`;

const images = [];

let currentindex = 0;

for(let i = 1 ; i <= rows * cols ; i++){
    // console.log(i);
    const image = document.createElement('img');
    image.src = `${url}${getrandomnumber()}x${getrandomnumber()}`;
    imagecontainer.appendChild(image);
    // console.log(image.src);
    
    images.push(image);
}

// console.log(getrandomnumber());
function getrandomnumber(){
    return Math.floor(Math.random() * 10) + 700;
}

//Event Listener
modal.addEventListener('click',(e)=>{
    // console.log(e.target);
    if(e.target.classList.contains('modal')){
        // console.log('hide')
        modal.style.display = 'none';
    }
});

images.forEach((image,index)=>{
    image.addEventListener('click',()=>{
        // console.log('hay');


        //show modal
        modal.style.display = 'flex';
        modalimage.src = image.src;

        currentindex = index;
        // console.log(currentindex);

        checkindex();

    });
});

leftbtn.addEventListener('click',()=>{
    currentindex--;
    checkindex();
});

rightbtn.addEventListener('click',()=>{
    currentindex++;
    checkindex();
});

function checkindex(){
    //checking index

    //remove disable form left and bottom first to cover such error
    // 1. left arrow hidden when idx > 0 
    //2.right arrow hidden when idx < 11
    leftbtn.classList.remove('disabled');
    rightbtn.classList.remove('disabled');

    if(currentindex === 0){
        leftbtn.classList.add('disabled');
    }
    if(currentindex === 11){
        rightbtn.classList.add('disabled');
    }

    modalimage.src = images[currentindex].src;
}

//left
// if(currentindex >= 0){
//     modalimage.src = images[currentindex].src;
// }else{
//     leftbtn.style.cursor = 'not-allowed';
//     leftbtn.classList.add('disabled');
//     currentindex = 0;
// }


//right
// if(currentindex <= 11){
//     modalimage.src = images[currentindex].src;
// }else{
//     rightbtn.style.cursor = 'not-allowed';
//     rightbtn.classList.add('disabled');
//     currentindex = 11;
// }