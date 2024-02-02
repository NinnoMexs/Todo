const input = document.getElementById('input');
const add = document.getElementById('add');
const deleteall = document.getElementById('deleteall')
const listcontain = document.getElementById('listcontain');
const selectall = document.getElementById('selectall');
add.onclick = function(){
  let newitem = document.getElementById('input').value;

  if(newitem.trim() !== ""){
    let li = document.createElement('li');
    li.className= 'mb-2 list-unstyled d-flex align-items-center border justify-content-between p-2 bg-primary-subtle border-3 border-top-0 border-end-0 rounded border border-primary  '
    // li.innerHTML= newitem;

    // let input = document.createElement('input');
    // input.className = "form-check-input"
    // input.type = 'checkbox'

    // let label = document.createElement('label');
    // label.className = 'form-check-input container';
    // label.innerHTML = newitem;

    let div = document.createElement('div')
    div.className = 'form-check'

    let input = document.createElement('input');
    input.className = 'form-check-input';
    input.type = 'checkbox';
    input.onclick = function(){
      label.classList.toggle('text-decoration-line-through')
      
    }

    let label = document.createElement('label');
    label.className = 'form-check-label';
    label.innerHTML = newitem;

    div.appendChild(input);
    div.appendChild(label);


    
    let deletebutton = document.createElement('button');
    deletebutton.textContent='Delete';
    deletebutton.className = 'btn btn-outline-secondary me-5 fw-bold'
    deletebutton.onclick = function(){
      li.remove()
    }
    // li.appendChild(input)
    // li.appendChild(label)
    li.appendChild(div)
    li.appendChild(deletebutton)
    listcontain.appendChild(li);
  }
  document.getElementById('input').value = "";

  if(newitem == ""){
    alert("Please add a list")
  }
}

deleteall.onclick = function(){
  let listcontain = document.getElementById('listcontain');
  while(listcontain.firstChild){
    listcontain.removeChild(listcontain.firstChild)
  }
}

selectall.onclick = function(){
  let select = document.getElementsByClassName("form-check-input");
  for(let i=0; i<select.length; i++){
    if(select[i].type == "checkbox")
    select[i].checked = true;
    console.log('Hello world')
   
  }

}