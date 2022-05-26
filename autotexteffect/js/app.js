//UI
const textel = document.getElementById('text');
const speedel = document.getElementById('speed');
const pgh = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

// String is character array in js.
// console.log(pgh.length);

let idx = 1;//space
let speed = 100;

function autotext(){
    // console.log('hay');
    textel.innerText = pgh.slice(0,idx);
    //idx += 1;
    idx++;          //index 1 toe

    if(idx > pgh.length){
        idx = 1 ;
    }
    setTimeout(autotext , speed);//invoke autotext() inside autotext()

}

autotext();
// autotext();

//Event Listener
speedel.addEventListener('input',()=>{
    // console.log('hay');
    // console.log(speedel.value);

    speed = 100 / speedel.value; //value 1 = speed 100 && 2 = speed 50 && 3 = 33.33  && 4 = 25 && 5 = 20  
});