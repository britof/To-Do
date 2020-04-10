var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var ToDos = JSON.parse(localStorage.getItem('list_todos')) || [];

function render() 
{
    listElement.innerHTML = '';
    for(todo of ToDos) 
    {
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        var linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#');

        var pos = ToDos.indexOf(todo);
        linkElement.setAttribute('onclick', 'del(' + pos + ')');

        var linkText = document.createTextNode('[x]\t');
        linkElement.appendChild(linkText);
        
        todoElement.append(linkElement);
        todoElement.appendChild(todoText);
        
        listElement.appendChild(todoElement);

        saveToStorage();
    }
}
render();

function add() 
{
    var todoText = inputElement.value;
    ToDos.push(todoText);
    inputElement.value = '';
    render();
}
buttonElement.onclick = add;

function del(pos)
{
    ToDos.splice(pos, 1);
    render();

}

function saveToStorage() 
{
    localStorage.setItem('list_todos', JSON.stringify(ToDos));
}