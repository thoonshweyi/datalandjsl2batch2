const crouselcontainer = document.querySelector('.crousel-container');
const crousels = document.querySelectorAll('.crousel');
const controls = document.querySelectorAll('.control');

let current = 0;

// for autorun crousel
function autorun(){
    current++;
    movecrousel();
    activecontrol();
    biggerani();
}
let interval = setInterval(autorun,2000);


function movecrousel(){
    if(current > crousels.length-1 ){
        current = 0;
        // console.log(current);
    }else if(current < 0 ){
        current = crousels.length-1;
    }
    crouselcontainer.style.transform = `translateX(${-current*520}px)`;
}
// movecrousel();

//for active control
function activecontrol(){
    controls.forEach(crousel=>crousel.classList.remove('active'));
    controls[current].classList.add('active');
}


// for move too fast when click control
function resetinterval(){
    clearInterval(interval);
    interval = setInterval(autorun,2000);
}


// Event Listener
controls.forEach((control)=>{
    control.addEventListener('click',function(){
        // console.log('hay');
        if(this.classList.contains('one')){
            current = 0;
    
            // console.log('one');
        }else if(this.classList.contains('two')){
            current = 1;
            // console.log('two');
        }else if(this.classList.contains('three')){
            current = 2;
            // console.log('three');
        }
        resetinterval();
        movecrousel();
        activecontrol();
        biggerani();
    });
    // console.log(control);
});

function biggerani(){
    crousels.forEach(crousel=>crousel.classList.remove('bigger'));
    crousels[current].classList.add('bigger');
}