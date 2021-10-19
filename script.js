// const btn = document.querySelector('.btn');

// btn.addEventListener('click', (e) => {
//     e.preventDefault();
//     document.querySelector('#my-form').style.background = '#ccc'
//     document.querySelector('body').classList.add('bg-dark');
//     document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>'
// })

const myForm = document.querySelector('#my-form')
const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')
const msg = document.querySelector('.msg')
const userList = document.querySelector('#users')

myForm.addEventListener('submit', onSubmit);

function onSubmit (e) {
    e.preventDefault();

    if(nameInput.value === '' || emailInput.value === '') {
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';

        setTimeout(() => msg.remove(), 3000) ;
    }else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

        userList.appendChild(li);

        //clear fields
        nameInput.value = '';
        emailInput.value ='';
    }
}
























// const name = 'John'
// const age = 30;

// // concatenation
// console.log ('My name is ' + name + ' and I am ' + age);

// // Template String 
// console.log(`My name is ${name} and I'm ${age}`);

// const s = 'Hello World';

// console.log(s.split(''));

// // Arrays

// const fruits = ['apple', 'oranges', 'pears'];
// fruits[3] = 'grapes';

// fruits.push('mango');
// fruits.unshift('strawberry');


// console.log(Array.isArray('hello'));

// console.log(fruits.indexOf('oranges'))


// console.log (fruits);



// const person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 30,
//     hobbies: ['music','movies','sports'],
//     address :{
//         street: '50 main st',
//         city: 'Boston',
//         State: 'MA'
//     }
// }

// console.log(person);

// const {firstName, lastName } = person;

// person.email = 'john@gmail.com';

// const todos = [
//     {
//         id: 1,
//         text: 'Take out trash',
//         isCompleted: true
//     },    
//     {
//         id: 2,
//         text: 'Meeting with boss',
//         isCompleted: true
//     },
//     {
//         id: 3,
//         text: ' Dentist appt',
//         isCompleted: false
//     },
// ]


// const todoJSON = JSON.stringify(todos);
// console.log(todoJSON);

// //For
// for(let i = 0 ; i< 10; i++) {
//     console.log(`For Loop Number: ${i}`);
// }

// for (let todo of todos) {
//     console.log(todo.text)
// }

// // forEach, map, filter
// todos.forEach(function(todo) {
//     console.log(todo.text);
// })

// const todoCompleted = todos.filter(function(todo) {
//     return todo.isCompleted === true;
// }).map(function(todo) {
//     return todo.text
// })

// console.log(todoCompleted);

// const x = 20;
// const y = 10;

// if(x > 5 || y > 10) {
//     console.log('x is more than 5 or y is more than 10 ')
// }

// const z = 10 ;

// const color = z > 10 ? 'red' : 'blue';

// console.log(color);

// switch(color) {
//     case 'red':
//         console.log('color is red');
//         break;
//     case 'blue':
//         console.log('color is blue');
//         break;
//     default:
//         console.log('color is NOT red or blue');
//         break;
// }

// const addNums = (num1 = 1 , num2 = 3) => {
//     return num1 + num2 ;
// }

// console.log(addNums(3,8));

// function Person(firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob);
//     this.getBirthYear = function( ) {
//         return this.dob.getFullYear();
//     }
//     this.getFullName = function() {
//         return `${this.firstName} ${this.lastName}`;
//     }
// }

// const person1 = new Person('John','Doe', '4-2-1970');
// const person2 = new Person('Mary','Smith', '5-3-1980');

// console.log(person1.getBirthYear())
// console.log(person1.getFullName())

