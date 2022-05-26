const filterel = document.getElementById('search');
const resultel = document.getElementById('result');

const totalusers = 50;

const listitems = [];

async function getdata(){

    // Method 1
    // fetch(url)
    // .then(res=>res.json())
    // .then(data => data.results)

 

    // Method 2
    const res = await fetch(`https://randomuser.me/api/?results=${totalusers}`);
    // console.log(res);

    // const data = await res.json();
    // console.log(data);
    // console.log(data.results);
    // other api can
    // console.log(data[results]);


    const {results} = await res.json();
    // console.log(results);

    resultel.innerText = '';

    results.forEach(user => {

        // console.log(user);

        const li = document.createElement('li');

        li.innerHTML = `
         
        <img src="${user.picture.large}" alt="${user.name.first}"/>
        <div class="user-info">
            <h4>${user.name.title}. ${user.name.first} ${user.name.last}</h4>
            <p>${user.location.city} , ${user.location.country}</p>
        </div>

        
        `;

        resultel.appendChild(li);

        listitems.push(li);
        
        // console.log(listitems);

    });
}
getdata();
// 1.check status


filterel.addEventListener('input',(e)=>filterdata(e.target.value));

function filterdata(search){
    // console.log(search);
    listitems.forEach(listitem=>{
        // console.log(listitem);
        if(listitem.innerText.toLocaleLowerCase().includes(search.toLowerCase())){
            listitem.classList.remove('hide');
        }else{
            listitem.classList.add('hide');
        }
    });
}