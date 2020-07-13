let input = document.querySelector('#to-do');
let btn = document.querySelector('#btn');
let list = document.querySelector('#list')
let el = document.getElementsByTagName('li')

//Funciones para agregar elementos con el boton

btn.addEventListener('click',() => {
    let txt = input.value;
if (txt === ""){
    alert('You should write something ...')
}else{
    let li = document.createElement('li');
    li.innerHTML = txt;
    list.insertBefore(li, list.childNodes[0]);
    input.value = '';
}
})

//Funcion para marcar como hecha la opcion
 list.addEventListener('click', e => {
     if(e.target.tagName == 'LI'){
         e.target.classList.toggle('checked');
     }
 })