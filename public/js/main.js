

function onSubmit(e) {
    e.preventDefault();
    document.querySelector('.msg').textContent = '';
    document.querySelector('#image').src = '';

    const prompt = document.querySelector('#prompt').value
    const size = document.querySelector('#size').value
    console.log(size, prompt)
    if (prompt == '') {
        alert('Pleaase add some text');
        return;
    } else {
        generateImageRequest(prompt, size)
    }
}

async function generateImageRequest(prompt, size) {
    try {
        showSpinner();
        const openAIResponse = await fetch('/openai/generateImage', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({prompt, size})
        });

        if (!openAIResponse.ok) {
            removeSpinner();
            throw new Error('That image could not be generated')
        }

        const data = await openAIResponse.json();
        
        const imageUrl = data.data;
        document.querySelector('#image').src = imageUrl;

        removeSpinner()
    } catch (error) {
        document.querySelector('.msg').textContent = error
        removeSpinner()
    }

}

function showSpinner() {
    document.querySelector('.spinner').classList.add('show')
}

function removeSpinner() {
    document.querySelector('.spinner').classList.remove('show')
}





document.querySelector('#image-form').addEventListener('submit', onSubmit);