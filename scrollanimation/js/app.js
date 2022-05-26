// UI
const boxes = document.querySelectorAll('.box');
// console.log(boxes); 
checkboxes();
window.addEventListener('scroll',checkboxes);

function checkboxes(){
    // console.log('hay');

    // let innerheight = window.innerHeight;
    // let innerheight = window.innerHeight / 2;

    let innerheight = window.innerHeight / 5 * 4;

    // console.log(innerheight);

    boxes.forEach(box=>{
        // console.log(box);
        
                            //  equal to 'y' and 'e.target.offsetTop()'
        const boxtop = box.getBoundingClientRect().top;
        // console.log(boxtop);

        if(boxtop < innerheight){
            box.classList.add('show');
        }else{
            box.classList.remove('show');
        }

    });

}