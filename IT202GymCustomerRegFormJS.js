const scriptURL = 'https://script.google.com/macros/s/AKfycbxbrIpgwIu0k1pZZDPirC5nU7Dhkyc5hssAZkr-LAjD8H-tKhBfFRYp6OuoHhVdJ4Yb4A/exec';

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
        alert("Congratulations! You're now a registered gym member!");
        window.location.reload();
    })
    .catch(error => console.error('Error!', error.message));
});
