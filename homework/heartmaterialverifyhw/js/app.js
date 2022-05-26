// Start Heart Click
const loves = document.querySelectorAll('.love-container .love');

// console.log(loves);

let timesclicked = 0;


loves.forEach((love)=>{
    // console.log(love);
    let clicktime = 0;
    love.addEventListener('click',function(e){
        // console.log('hello');

        if(clicktime === 0){
            clicktime = new Date().getTime();
        }else{
            // console.log(clicktime);
            if(new Date().getTime() - clicktime <=800){
                // console.log('dblclick');

                createHeart(e);
                clicktime = 0;
            }else{
                clicktime = new Date().getTime();
            }
        }
    });

});
function createHeart(e){

    const cx = e.clientX;
    const cy = e.clientY;

    const offsetleft = e.target.offsetLeft;
    const offsettop = e.target.offsetTop;

    const x = cx-offsetleft;
    const y = cy-offsettop;

    const heart = document.createElement('i');
    heart.className = 'fas fa-heart heart';

    heart.style.top = `${y}px`;
    heart.style.left = `${x}px`;

    e.target.appendChild(heart);
    // console.log(heart);

}
// End Heart Click

// Start Material Design

const lbls = document.querySelectorAll('.form-group .lbl');

// console.log(lbls);
lbls.forEach((lbl,index)=>{
    // console.log(lbl);
    // console.log(lbl.textContent);

    lbl.innerHTML = lbl.textContent
                        .split('')
                        .map((lbl,index)=>`<span style="transition-delay:${index*50}ms;">${lbl}</span>`)
                        .join('');
});
// End Material Design

// Start Eye Icon
const eyebtn = document.querySelector('.eye-btn');
const passw = document.getElementById('password');

eyebtn.addEventListener('click',(e)=>{
    // console.log('hay');
    if(eyebtn.classList.contains('fa-eye')){
        eyebtn.classList.remove('fa-eye');
        eyebtn.classList.add('fa-eye-slash');

        passw.setAttribute('type','text');

    }else{
        eyebtn.classList.remove('fa-eye-slash');
        eyebtn.classList.add('fa-eye');

        passw.setAttribute('type','password');
    }
});
// End Eye Icon

// Start Pin Modal

const codes = document.querySelectorAll('.codetsyk');

codes.forEach((code,index)=>{
    // console.log(code);
    code.addEventListener('keydown',function(e){
        // console.log('hay');
        if(e.key >= 0 && e.key <=9){
            codes[index].value = '';
            if(index != codes.length-1){
                setTimeout(()=>codes[index+1].focus(),10);
            }
        }else if(e.key=== 'Backspace'){
            if(index!==0){
                setTimeout(()=>codes[index-1].focus(),10);
            }
        }
    });
});

// End Pin Modal