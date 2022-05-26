// UI
const times = document.getElementById('times');
const loveme = document.querySelector('.loveme');

let timesclicked = 0;

//db click
let clicktimes = 0;

loveme.addEventListener('click',(e)=>{
    // console.log('hay');
    // check this is first click
    if(clicktimes === 0){
        clicktimes = new Date().getTime();
    }else{
        // check the second click clicked in 800 ms
        if(new Date().getTime() - clicktimes < 800){
            // console.log('i am dblclick');
            createheart(e);
            clicktimes = 0;
        }else{
            clicktimes = new Date().getTime();
        }
    }

});

const createheart = (e)=>{

    const heart = document.createElement('i');
    heart.classList.add('fas');
    heart.classList.add('fa-heart');

    // console.log(heart);

    const cx = e.clientX;
    const cy = e.clientY;
    const offsettop = e.target.offsetTop;
    const offsetleft = e.target.offsetLeft;

    const xinside = cx-offsetleft;
    const yinside = cy-offsettop;

    heart.style.top = `${yinside}px`;
    heart.style.left = `${xinside}px`;

    loveme.appendChild(heart);

    // timesclicked += 1;
    // timesclicked++;
    // times.textContent = timesclicked;


    times.textContent = ++timesclicked;

    setTimeout(()=>heart.remove(),1000);
}