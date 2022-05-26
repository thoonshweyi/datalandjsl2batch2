
//for initial
// UI
const quizboxes = document.querySelectorAll('.quizs-box');

quizboxes.forEach((quizbox)=>{
    
    // console.log(quizbox);
    quizbox.addEventListener('mouseover',()=>{
        removequizactive();
        quizbox.classList.add('active')
    });

    // quizbox.addEventListener('mouseleave',()=>{
    //     quizbox.classList.remove('active');
    // });

});

function removequizactive(){
    quizboxes.forEach(quizbox=>quizbox.classList.remove('active'));
}

// For Quiz
const fruitsquizdatas = [
    {
        image : './img/fruits/mangosteen.jpg',
        a : 'Plum',
        b : 'Jackfruit',
        c : 'Mangosteen',
        d : 'Grape',
        correct : 'c'
    },
    {
        image : './img/fruits/kiwi.jpg',
        a : 'Kiwi',
        b : 'Dragon Fruit',
        c : 'Orange',
        d : 'Pineapple',
        correct : 'a'
    },
    {
        image : './img/fruits/honeydrewmelon.jpg',
        a : 'Plum',
        b : 'Jackfruit',
        c : 'Mangosteen',
        d : 'Honeydrewmelon',
        correct : 'd'
    },
    {
        image : './img/fruits/banana.jpg',
        a : 'Avocado',
        b : 'Banana',
        c : 'Date',
        d : 'Pear',
        correct : 'b'
    },
    {
        image : './img/fruits/avocado.jpg',
        a : 'Avocado',
        b : 'Lime',
        c : 'Cherry',
        d : 'Papaya',
        correct : 'a'
    },
    {
        image : './img/fruits/papaya.jpg',
        a : 'Banana',
        b : 'Durian',
        c : 'Papaya',
        d : 'Pineapple',
        correct : 'c'
    },
    {
        image : './img/fruits/raspberry.jpg',
        a : 'Peach',
        b : 'Olive',
        c : 'Avocado',
        d : 'Raspberry',
        correct : 'd'
    },
]


const vegetablesquizdatas = [
    {
        image : './img/vegetables/broccoli.jpg',
        a : 'Zucchini',
        b : 'Onion',
        c : 'Broccoli',
        d : 'Peas',
        correct : 'c'
    },
    {
        image : './img/vegetables/carrot.jpg',
        a : 'Cucumber',
        b : 'Watercress',
        c : 'Carrot',
        d : 'Broccoli',
        correct : 'c'
    },
    {
        image : './img/vegetables/cauliflower.jpg',
        a : 'Carrot',
        b : 'Cauliflower',
        c : 'Asparogus',
        d : 'Green Beans',
        correct : 'b'
    },
    {
        image : './img/vegetables/corn.jpg',
        a : 'Corn',
        b : 'Onion',
        c : 'Red Bell Pepper',
        d : 'Chili',
        correct : 'a'
    },
    {
        image : './img/vegetables/sweetpotato.jpg',
        a : 'Sweet Potato',
        b : 'Lettuce',
        c : 'Ginger',
        d : 'Red Cabbage',
        correct : 'a'
    },
    {
        image : './img/vegetables/tomato.jpg',
        a : 'Zucchini',
        b : 'Watercress',
        c : 'Corn',
        d : 'Tomato',
        correct : 'd'
    },
    {
        image : './img/vegetables/redbellpepper.jpg',
        a : 'Green Tomato',
        b : 'Cabbage',
        c : 'Red Bell Pepper',
        d : 'Peas',
        correct : 'c'
    },
]

const animalsquizdatas = [
    {
        image : './img/animals/bear.jpg',
        a : 'Tiger',
        b : 'Lion',
        c : 'Hippo',
        d : 'Bear',
        correct : 'd'
    },
    {
        image : './img/animals/camel.jpg',
        a : 'Zebra',
        b : 'Camel',
        c : 'Cow',
        d : 'Hourse',
        correct : 'b'
    },
    {
        image : './img/animals/elephant.jpg',
        a : 'Elephant',
        b : 'Kangaroo',
        c : 'Whale',
        d : 'Crab',
        correct : 'a'
    },
    {
        image : './img/animals/octopus.jpg',
        a : 'Turtle',
        b : 'Hippo',
        c : 'Seahorse',
        d : 'Octopus',
        correct : 'd'
    },
    {
        image : './img/animals/seahorse.jpg',
        a : 'Seahorse',
        b : 'Whale',
        c : 'Dolphin',
        d : 'Jelli Fish',
        correct : 'a'
    },
    {
        image : './img/animals/turkey.jpg',
        a : 'Fox',
        b : 'Peacock',
        c : 'Turkey',
        d : 'Giraffe',
        correct : 'c'
    },
    {
        image : './img/animals/zebra.jpg',
        a : 'Zebra',
        b : 'Dear',
        c : 'Horse',
        d : 'Wolf',
        correct : 'a'
    }
];

// UI
const fruitquiz = document.getElementById('fruits'),
        vegetablequiz = document.getElementById('vegetables'),
        animalquiz = document.getElementById('animals');

const home = document.querySelector('.home');
const qacontainer = document.querySelector('.qa-container');

const img = document.getElementById('img');
const answera = document.getElementById('a'),
answerb = document.getElementById('b'),
answerc = document.getElementById('c'),
answerd = document.getElementById('d');

const answers = document.querySelectorAll('.answer');

const heartcontainer = document.querySelector('.heart-container');

let currentquizarray;

let currentquiz = 0;
let score = 0;
let wrongtime = 0;
//for fruit quiz
fruitquiz.addEventListener('click',()=>{
    // console.log('hay');
    home.style.display = 'none';
    qacontainer.style.display = 'block';
    loadquiz(fruitsquizdatas);
});

vegetablequiz.addEventListener('click',()=>{
    // console.log('hay');
    home.style.display = 'none';
    qacontainer.style.display = 'block';
    loadquiz(vegetablesquizdatas);
});

animalquiz.addEventListener('click',()=>{
    // console.log('hay');
    home.style.display = 'none';
    qacontainer.style.display = 'block';
    loadquiz(animalsquizdatas);
});

// for answer click
answers.forEach((answer)=>{
    // console.log(answer);
    answer.addEventListener('click',()=>{
        // uncheckanswer();
        answer.classList.add('check');

        

        let selectedanswer = answer.id;
        // console.log(selectedanswer);

        if(selectedanswer === currentquizarray[currentquiz].correct){
            score++;
            console.log(score);
            answer.className = 'answer correct';
            currentquiz++;
            if(currentquiz < currentquizarray.length){
                setTimeout(()=>{
                    uncheckanswer();
                    loadquiz(currentquizarray);
                },1000);
            }else{
                gameover();
            }
        }else{
            wrongtime++;
            // console.log(wrongtime);
            heartcontainer.children[0].remove();
            answer.className = 'answer wrong';
            if(wrongtime === 3){
                gameover();
            }
        }

        

    });
});

function loadquiz(quizarr){
    currentquizarray = quizarr;
    img.src = quizarr[currentquiz].image;
    answera.textContent =  quizarr[currentquiz].a;
    answerb.textContent =  quizarr[currentquiz].b;
    answerc.textContent =  quizarr[currentquiz].c;
    answerd.textContent =  quizarr[currentquiz].d;
}
function uncheckanswer(){
    // answers.forEach(answer => answer.classList.remove('check'));
    answers.forEach(answer => answer.className = 'answer');
    // answers.forEach(answer =>{
    //     if(!answer.classList.contains('wrong')){
    //         answer.className = 'answer';
    //     }
    // });
}
function gameover(){
    qacontainer.style.height = "200px";
     qacontainer.innerHTML = `
                    <h2>Result : ${score} / 7</h2>
                    <button id='okbtn' class='btn'>OK</button>
                `;
    const okbtn = document.getElementById('okbtn');
    okbtn.addEventListener('click',()=>{
        
        window.location.reload();
        
    });
}

// Start Loading
const blurel = document.querySelector('.blur');
const loadingtext = document.querySelector('.loading-text');
const progressbar = document.querySelector('.progress-bar');

let load = 0 ;

let interval = setInterval(loading,30);

function loading(){
    load++;
    progressbar.style.width = `${load}%`;
    // console.log(load);
    if(load === 100){
        clearInterval(interval);
        blurel.style.display = 'none';
    }
}
// End Loading