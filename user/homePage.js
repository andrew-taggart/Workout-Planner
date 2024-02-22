const userName = document.querySelector('#userName')
const userProfileInfo = document.querySelector('#userProfileInfo')

document.addEventListener('DOMContentLoaded', async () => {
    try { 
        const response = await axios.get('/api/userdata')
        const userData = response.data
        userName.textContent = userData.name

    Object.entries(userData.profile).forEach(([key,value]) => {
        const listItem = document.createElement('li')
        listItem.textContent = `$(key}: ${value}`
        userProfileInfo.appendChild(listItem)
    })
    } catch (error) {
        console.error('Error fetching user data', error)
    }

    document.querySelectorAll('.navLink').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault()
            console.log(`Navigating to $(link.getAttribute('href'))}`)
        })
    })
})