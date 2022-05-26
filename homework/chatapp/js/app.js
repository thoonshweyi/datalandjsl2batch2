//UI
const useraddbtn = document.getElementById('useraddbtn'),
        searchbtn = document.getElementById('searchbtn');
const arrowbtn = document.getElementById('arrowbtn');


const menutabitems = document.querySelectorAll('.menutab-item ');
const menulinks = document.querySelectorAll('.menutab-item a i');

const userlist = document.querySelector('.user-list');

const actionbarel = document.querySelector('.actionbar');
const searchboxel = document.querySelector('.searchbox');

const searchname = document.getElementById('searchname');


const users = [];



// console.log(menulinks);
menulinks.forEach((menulink)=>{

    menulink.addEventListener('click',(e)=>{
        removepreactive();
        // console.log(e.target.parentElement);
        e.target.parentElement.parentElement.classList.add('active');
    });
    
});

function removepreactive(){
    menutabitems.forEach(menutabitem => menutabitem.classList.remove('active'));
}

const userrow = 50;
const url = `https://randomuser.me/api/?results=${userrow}`;

async function getusers(){

    const response = await fetch(url);
    // console.log(response);
    const {results} = await response.json();
    // console.log(results);

    userlist.innerHTML = '';

    results.forEach(result =>{
        
        const li = document.createElement('li');
        li.classList.add('user-list-item');
        li.innerHTML = `

        <img src="${result.picture.large}" alt="${result.name.first}">

        <div class="user-info">

            <h4 class="username">${result.name.title} . ${result.name.first} ${result.name.last}</h4>
            <small class="useraddress">${result.location.city} , ${result.location.country}</small>

        </div>
        
        `;
        users.push(li);

        userlist.appendChild(li);

    });  

    // console.log(users);

}
getusers();

searchbtn.addEventListener('click',()=>{

    actionbarel.classList.add('hidden');
    searchboxel.classList.remove('hidden');
    searchname.focus();

});

arrowbtn.addEventListener('click',()=>{
    actionbarel.classList.remove('hidden');
    searchboxel.classList.add('hidden');
    
});

searchname.addEventListener('input',()=>{

    const searchvalue = searchname.value;
    console.log(searchvalue);

    users.forEach(user=>{
        const username = user.querySelector('.username').innerText;

        if(username.toLowerCase().includes(searchvalue.toLowerCase())){

            user.classList.remove('hidden');
            
            
        }
        else{
            
            user.classList.add('hidden');
        }

    });

});