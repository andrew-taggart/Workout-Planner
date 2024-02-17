const exerciseForm = document.querySelector('#exerciseForm')

exerciseForm.addEventListener('submit', async function(event) {
    event.preventdefault
    const exerciseData = {
        name: document.querySelector('#name').value,
        sets: document.querySelector('#sets').value,
        reps: document.querySelector('#reps').value,
        weight: document.querySelector('#weight').value,
        notes: document.querySelector('#notes').value,
    }

    try { const response = await fetch('./exercises', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(exerciseData)
    })
    if (!response.ok) {
        throw new Error('Failed to crate exercise')
    }
    const newExercise = await response.json()
    console.log('New Excercise:', newExercise)
} catch (error) {
    console.error('Error creating exercise', error)
}

})