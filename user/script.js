const userForm = document.querySelector('#userForm')
const userName = document.querySelector('#username')
const password = document.querySelector('#password')
const enterName = document.querySelector('#name')
const email = document.querySelector('#email')

userForm.addEventListener('submit', function(event) {
    event.preventDefault()
    const userData = {
        username: userName.value,
        password: password.value,
        name: enterName.value,
        email: email.value,
    }

    fetch('http://localhost:3001/users/signUp', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
    .then(response => response.json)
    .then(data => console.log('User Created', data))
    .catch((error) => console.error('Error:', error))
})