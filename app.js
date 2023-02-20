let myInp = document.querySelector('.todoinput');
let addBtn = document.querySelector('.addbtn');
let list = document.querySelector('.todolist');

addBtn.addEventListener('click', function(){
    let input = myInp.value;
    
    if(!input){
     return    
    };

    let newEl = document.createElement('div');
    
    let check = document.createElement('input');
    check.type = 'checkbox'
    check.addEventListener('click', function(){
        if(check.checked){
            listEl.style.textDecoration = 'line-through'
        } else {
            listEl.style.textDecoration = 'none'
        }
    }) 

    let listEl = document.createElement('li');
    listEl.innerText = input;
    let delbtn = document.createElement('i');
    delbtn.innerHTML = '<i class="fa-regular fa-trash-can"></i>';
    delbtn.onclick = () => {
        newEl.removeChild(listEl)
        newEl.removeChild(delbtn)
        newEl.removeChild(check)
    };

    
    newEl.appendChild(check);
    newEl.appendChild(listEl);
    newEl.appendChild(delbtn);
    list.appendChild(newEl);

    myInp.value = '';
});