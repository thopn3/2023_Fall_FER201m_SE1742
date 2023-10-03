// Basic syntax: (parameters) => body

const sum = (a, b) => console.log(a+b) // Anonymous function
const printMessage = () => console.log('Hello')
const getMessage = () => "World"
const getMessage1 = () => {return "Haha"}

sum(10,20)
printMessage()
console.log(getMessage());
console.log(getMessage1());

// Ex:
const users = [
    {'id':1, 'name': 'Hoang'},
    {'id':2, 'name': 'Hong'}
]

// Tao 1 element bang DOM
const ul = document.createElement('ul')
ul.id = 'list'

users.forEach(({id, name})=>{
    const li = document.createElement('li')
    li.className = 'item'
    li.textContent = id + ", "+ name
    ul.appendChild(li)
})

// Bo sung ul vao id = 'root'
document.getElementById('root').appendChild(ul)