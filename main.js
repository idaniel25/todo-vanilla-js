let users = [
    {
        id: 1,
        name: "Mihai",
        email: "mihai.gheorghe@csie.ase.ro",
        password: "Mihai1!"
    },
    {
        id: 2,
        name: "Daniel",
        email: "daniel@csie.ase.ro",
        password: "Daniel1!"
    },
]

let toDos = [
    {
        id: 1,
        taskName: "Do the dishes!",
        status: "to-do",
        responsible: "Mihai"
    },
    {
        id: 2,
        taskName: "Do the laundry!",
        status: "to-do",
        responsible: "Mihai"
    },
    {
        id: 3,
        taskName: "Do the homework!",
        status: "in progress",
        responsible: "Daniel"
    },
    {
        id: 4,
        taskName: "Binging!",
        status: "done",
        responsible: "Daniel"
    },
]

import { login } from './Login/login.js'

const loginButton = document.getElementById("loginSubmit");
loginButton.addEventListener('click', login);