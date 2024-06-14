const scriptURL = 'https://script.google.com/macros/s/AKfycbyOoTQUio0Uc4-b4YlnWOLReDiF-eCLTKsW4cCznzeQy9QV-DP72DWahK6BDaq-96ze2w/exec';

const form = document.forms['contact-form'];

form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { 
        method: 'POST', 
        body: new FormData(form)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.text();
    })
    .then(data => {
        alert("Thank you! Your Customer Feedback Review is submitted successfully. Thank you and come again!!!");
        window.location.reload();
    })
    .catch(error => console.error('Error!', error.message));
});
