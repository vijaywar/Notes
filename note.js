var data=[];

var savebutton=document.getElementById('savebutton');
function load(){
   data=JSON.parse(localStorage.getItem('NotesData')) ;
   console.log(data)
if(data==null)
data=[];
   var store=document.getElementById('store');
   for(i in data){
       var box=document.createElement('textarea');
       box.setAttribute('class',"notes  d-inline-block w-25 bg-warning text-dark font-weight-bolder");
       box.id='StoredData'+i;
       box.readOnly=true;
       box.value=data[i];
       box.draggable='true';
       box.setAttribute('ondragstart','startdrag(event)');
       store.appendChild(box);
   }
}

function save(){
    var notes=document.getElementById('notes');
    data.push(notes.value)
    localStorage.setItem('NotesData',JSON.stringify(data));
    location.reload();
    savebutton.innerHTML='Save';
}
load();



function dropf(ev) {
    ev.preventDefault();
}  

function startdrag(ev) {
    ev.dataTransfer.setData("id", ev.target.id);
    ev.dataTransfer.setData('datak',ev.target.value)
}  

function droped(ev) {  
ev.preventDefault(); 
data=data.filter(i=>{
    console.log(i!=ev.dataTransfer.getData('datak'));
    return i!=ev.dataTransfer.getData("datak")});
localStorage.setItem('NotesData',JSON.stringify(data));
location.reload();
}  

function edit(ev) {  
    ev.preventDefault(); 
    data=data.filter(i=>{
        return i!=ev.dataTransfer.getData("datak")});
    let notes=document.getElementById('notes');
    notes.value=ev.dataTransfer.getData('datak');
    savebutton.innerHTML='Edit';
    alert("Content copied to write seciton,\n edit and click edit button to save changes!")
}