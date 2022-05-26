const forbtn = document.querySelector('.forbtn'),
        backbtn = document.querySelector('.backbtn');

const contentitems = document.querySelectorAll('.content-item');

const progressbar = document.querySelector('.progress-bar');
const steps = document.querySelectorAll('.step');

const statustitle = document.querySelector('.status-title');

let current = 0;




// Event Listener
forbtn.addEventListener('click',()=>{
    //for question change
    current++;
    if(current < contentitems.length){
        removePreContent();
        contentitems[current].classList.add('show');
    }else{
        current = contentitems.length-1;
    }

    updatestep();
    updateprogressbar();    
});

backbtn.addEventListener('click',()=>{
    //for question change
    current--;
    if(current >= 0){
        removePreContent();
        contentitems[current].classList.add('show');
    }
    else{
        current = 0;
    }

    updatestep();
    updateprogressbar();
});



function removePreContent(){
    contentitems.forEach((contentitem)=>{
        contentitem.classList.remove('show');
    });
}

// for active step circle
function updatestep(){
    steps.forEach((step,idx)=>{
        if(idx <= current){
            step.classList.add('active');
        }else{
            // idx > current
            step.classList.remove('active');
        }
    });

    // for btn change
    if(current === 0){
        backbtn.disabled =  true;
    }else{
        backbtn.disabled = false
    }

    if(current === 3){
        forbtn.textContent = 'Submit';
    }else{
        forbtn.textContent = 'Forward >';
    }
} 

function updateprogressbar(){
    // console.log(`${current / (steps.length-1)}%`);    
    progressbar.style.width = `${(current / (steps.length-1)) * 100}%`;
    
    statustitle.textContent = `Progress(${current + 1} / ${steps.length})`;
}