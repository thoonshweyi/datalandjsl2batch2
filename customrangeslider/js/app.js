// UI
const range = document.getElementById('range');

range.addEventListener('input',(e)=>{

    // console.log(e.target.value);

    const getvalue = +e.target.value;
    const label = e.target.nextElementSibling;
    
    // get rangewidth
    const rangewidth = getComputedStyle(e.target).getPropertyValue('width');
    // console.log(rangewidth);
    // console.log(rangewidth.length);

    const lablewidth = getComputedStyle(label).getPropertyValue('width');
    // console.log(lablewidth);
    // console.log(lablewidth.length);

    const numrangewidth = rangewidth.substring(0,rangewidth.length - 2);
    // console.log(numrangewidth);

    const numlabelwidth = lablewidth.substring(0,lablewidth.length - 2);
    // console.log(numlabelwidth);


    const min = +e.target.min;
    const max = +e.target.max;
    // console.log(min,max);

    // 1/100 * 300 
    const left = getvalue * (numrangewidth / max) - numlabelwidth / 2 + scale(getvalue,min,max,10,-10);

    label.style.left = `${left}px`;

    label.innerText = getvalue;


});

const scale = (num,inmin,inmax,outmin,outmax)=>{
    return (num-inmin) * (outmax - outmin) / (inmax - inmin) + outmin;
};