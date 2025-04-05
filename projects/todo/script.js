const addBtn = document.getElementById('addTask');
let todoInput = document.getElementById('todoInput');

addBtn.addEventListener('click',() => {
    let value = todoInput.value;
    todoInput.value = ''
    // value = ''; 
    console.log(value);


    const li = document.createElement('li');
    li.textContent = value;

    
    const delBtn = document.createElement('button');
    delBtn.textContent = 'X';
    li.appendChild(delBtn)
    const ul = document.getElementById('listul');
    ul.appendChild(li);

    delBtn.addEventListener('click', () => {
        li.remove()
    })


    
})