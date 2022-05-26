//UI
const searchel= document.querySelector('.search'),
        serchbtn = document.querySelector('.search-btn'),
        inputel = document.querySelector('.input');

const counters = document.querySelectorAll('.counter');

const para = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum id saepe aut nisi, repellat odit facere ducimus modi! Voluptates iste porro hic nobis dolor expedita cumque facere nam quasi excepturi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius fugiat blanditiis nisi sequi quasi. Voluptas vel tenetur dolor perferendis facilis. Deserunt minima modi nisi! Dolores excepturi dicta esse temporibus ea.";

const productintro = document.querySelector('.product-intro');

//for autocount
counters.forEach((counter)=>{
    counter.textContent = 0;
    // console.log(counter);
   
    function updatecounter(){
        const datatarget = parseInt(counter.getAttribute('data-target'));
        const increment = Math.ceil( datatarget/100);
    
        let currentnumber = parseInt(counter.textContent);
    
        if(currentnumber < datatarget){
            counter.textContent = currentnumber + increment;
            setTimeout(updatecounter,50);
        }
    }
    updatecounter();

});


//for hidden search
serchbtn.addEventListener('click',()=>{
    // console.log('hay');

    searchel.classList.toggle('active');
    inputel.focus();

});


//for auto text
let space = 1;

function loadpara(){
    
    let text = para.substring(0,space);
    productintro.textContent = text ;
    space++;

    if(space > para.length){
        space = 1;
    }
    setTimeout(loadpara, 100);
}
loadpara();
// loadpara();
    