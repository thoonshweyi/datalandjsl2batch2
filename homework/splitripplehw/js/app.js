const container = document.querySelector('.container');
const left  = document.querySelector('.left'),
        right = document.querySelector('.right');

left.addEventListener('mouseover',()=>container.classList.add('hoverleft'));
right.addEventListener('mouseover',()=>container.classList.add('hoverright'));

left.addEventListener('mouseleave',()=>container.classList.remove('hoverleft'));
right.addEventListener('mouseleave',()=>container.classList.remove('hoverright'));

// Start Ripple
const btns = document.querySelectorAll('.btn');

btns.forEach((btn)=>{
    // console.log(btn);
    btn.addEventListener('click',(e)=>{
        // console.log('hay');

        // console.log(e.target);

        const cx = e.clientX;
        const cy = e.clientY;

        const offsettop = e.target.offsetTop;
        const offsetleft = e.target.offsetLeft;

        const x = cx - offsetleft;
        const y = cy - offsettop;

        const dot = document.createElement('span');
        dot.classList.add('dot');

        dot.style.top = `${y}px`;
        dot.style.left = `${x}px`;

        console.log(dot);

        btn.appendChild(dot);

        setTimeout(()=>dot.remove(),1000);

        console.log(cx,cy);
        console.log(offsetleft,offsettop);

    });
})
// End Ripple