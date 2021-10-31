let add=document.querySelector(".add");
let list=document.querySelector(".todos");
let form=document.querySelector(".search input");
add.addEventListener("submit",(e)=>{
    e.preventDefault();
    const val=add.add.value.trim().toLowerCase();
    console.log(val);
    if(val.length)
    addTolist(val);
    add.reset();
});
function addTolist(e){
    const html=`<li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${e}</span>
    <i class="far fa-trash-alt delete"></i>
  </li>`;
  list.innerHTML+=html;
   
}
//deleting todos
list.addEventListener("click",e=>{
    if(e.target.classList.contains("delete"))
    e.target.parentElement.remove();
});
//filtering the list

form.addEventListener("keyup",e=>{
    
    FilteredElement(form.value.trim().toLowerCase());
});
//function for filtering todos
function FilteredElement(li){
    Array.from(list.children)
            .filter((todo)=>{
                return !todo.textContent.includes(li);
            })
            .forEach((todo)=>{
                todo.classList.add("filtered");
            });
 Array.from(list.children)
            .filter((todo)=>{
                return todo.textContent.includes(li);
            })
            .forEach((todo)=>{
                todo.classList.remove("filtered");
            });
    
    
}