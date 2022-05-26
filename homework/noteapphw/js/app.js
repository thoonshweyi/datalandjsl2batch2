//UI
let notenumber = 1;
const newbtn = document.querySelector('.btn');
newbtn.addEventListener('click',()=>newbtn.classList.toggle('active'));

const notecontainer = document.querySelector('.note-container');
const colors = document.querySelectorAll('.color');
const colorarr = ["khaki","green","lightcoral","lightskyblue","magenta"];

colors.forEach((color,index)=>{
    // console.log(color);
    color.addEventListener('click',()=>{
        addnewnote(index);
    });
});

function addnewnote(colorindex,text = '',color){
    const note = document.createElement('div');

        // note.className = `note ${colorarr[colorindex]}`;
        // note.className = `note`;

        note.className = `note ${colorindex === '' ? color : colorarr[colorindex]}`;

        note.innerHTML = `
        <div class="note-toolbar">
            <h4 class="note-title">New Note (${notenumber})</h4>

            <button class="toolbtn editbtn"><i class="fas fa-pencil"></i></button>
            <button class="toolbtn deletebtn"><i class="fas fa-times"></i></button>
            
        </div>
        <div class="doc ${text ? '' : 'hidden'}"></div>
        <textarea class="textarea ${text ? 'hidden' : ''}" autofocus></textarea>
        `;
        


        const editbtn = note.querySelector('.editbtn');
        const deletebtn = note.querySelector('.deletebtn');
        const textarea = note.querySelector('.textarea');
        const doc = note.querySelector('.doc');

        textarea.value = text;
        doc.textContent = text;

        // delete note function
        deletebtn.addEventListener('click',()=>{
            note.remove();
            updatelocalstorage();
        });


        editbtn.addEventListener('click',()=>{
            textarea.classList.toggle('hidden');
            doc.classList.toggle('hidden');
            textarea.focus();

        });

        textarea.addEventListener('input',()=>{
            doc.textContent = textarea.value;

            updatelocalstorage();
        });

        notecontainer.appendChild(note);
        // console.log(note);
        notenumber++;
}

function updatelocalstorage(){

    const textareas = document.querySelectorAll('.textarea');

    const note = [];

    textareas.forEach(textarea => {
        note.push(
            
            {
                color : textarea.parentElement.classList[1],
                notetext : textarea.value
            }

        );
    });
    localStorage.setItem('notes',JSON.stringify(note));

}

const notes = JSON.parse(localStorage.getItem('notes'));

notes.forEach(note =>{
    addnewnote('',note.notetext,note.color);
});