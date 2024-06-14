const scriptURL = 'https://script.google.com/macros/s/AKfycbyrX5fZAAlv3wyiHDMri1TVKj_vimyUbhvCO5cCXPpAlE9gtW-L2I_ipu1kNRbL9YW_YA/exec';

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
        alert("Congratulations! You're Appointment Schedule Received Successfully!");
        window.location.reload();
    })
    .catch(error => console.error('Error!', error.message));
});