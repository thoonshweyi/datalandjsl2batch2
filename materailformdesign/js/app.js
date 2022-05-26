// UI
const labels = document.querySelectorAll('.form-group label');
// console.log(labels);

labels.forEach(label=>{
    // console.log(label);
    // console.log(label.innerText);
    // console.log(label.innerText.split());

    //split the label one character by one
    // console.log(label.innerText.split(''));

    label.innerHTML = label.innerText
        .split('')
        .map((letter,index)=>
        `<span style="transition-delay:${index * 50}ms;">${letter}</span>`)
        .join('');
        //toString() can not use instead of join()
        //map()return an array 
        //for continuous . code only map() can use forEach() can't use       
})