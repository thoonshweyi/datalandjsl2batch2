//UI
const buttons = document.querySelectorAll('.btnripple');
// console.log(buttons);
 buttons.forEach(button=>{
    // console.log(button);

    button.addEventListener('click',(e)=>{
        // console.log('i am working');

        const cx = e.clientX;
        const cy = e.clientY;

        // console.log(cx);
        
        //e.target.offsetTop = the distance between document top and button top
        //e.target.offsetLeft = the distance between document left and button left
        const btntop = e.target.offsetTop;
        const btnleft = e.target.offsetLeft;

        // console.log(btnleft);
        
        //trying to get the exact pixel for x and y
        const xinside = cx-btnleft;
        const yinside = cy-btntop;

        // console.log(xinside, yinside);

        const circle = document.createElement('span');
        circle.classList.add('circle');
        circle.style.top = yinside+'px';
        circle.style.left = xinside +'px';
        // console.log(circle);

        e.target.appendChild(circle);

        //remove the append circle if circle is not remove , there are many span element inside btn
        setTimeout(()=>{
            circle.remove();
        },600);

    });

 });