import users from '../Database/users.js'

export function login(e) {
    e.preventDefault()
    const loginEmail = document.getElementById("loginEmail")
    const loginPassword = document.getElementById("loginPassword")
    console.log(`you want to authentificate with ${loginEmail.value} and ${loginPassword.value}`)

    const user = users.filter((user) => {
        return user.email === loginEmail.value
    })

    if(user[0]) {
        console.log('user found: ', user[0])
        if(user[0].password === loginPassword.value) {
            localStorage.setItem('isLoggedIn', true)
            localStorage.setItem('username', user[0].name)
            document.getElementById("login").setAttribute('hidden', 'true')
            document.getElementById("register").setAttribute('hidden', 'true')
            document.getElementById("user").removeAttribute('hidden')
            document.getElementById("greetings").textContent = 'Salut ' + user[0].name
        }
    } else {
        console.log('user not found')
    }
}
