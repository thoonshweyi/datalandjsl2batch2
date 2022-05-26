// UI
const codes = document.querySelectorAll('.code');
// console.log(codes);
// console.log(codes[0]);
codes[0].focus();

codes.forEach((code,index)=>{
    // console.log(code);

    code.addEventListener('keydown',(e)=>{

        if(e.key >= 0 && e.key <= 9){

            //for only 1 number
            codes[index].value = '';

            if(index !== 5){
                // codes[index+1].focus();
                setTimeout(()=>codes[index+1].focus(),10);
                // if we use keydown event timeinterval must delay for foucus to next box
            }

        }else if(e.key === 'Backspace'){
            // codes[index-1].focus();
            if(index !==0){
                setTimeout(()=>codes[index-1].focus(),10);
            }
        }

    })


});