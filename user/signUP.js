document.addEventListener('DOMContentLoaded', function () {
    const signUpForm = document.querySelector('#signUpForm')
    const signInForm = document.querySelector('#signInForm')

    signUpForm.addEventListener('submit', function (e) {
        e.preventDefault()
        window.location.href = 'homePage.html'
    })
    signInForm.addEventListener('submit', function(e) {
        e.preventDefault()
        window.location.href = 'homePage.html'
    })
})
        