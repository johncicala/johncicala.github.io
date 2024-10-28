let contactForm = document.getElementById('emailSubmission');
let formMessage = document.getElementById('formMessage');

let submitForm = async (event) => {
    event.preventDefault(); 
    
    let formData = new FormData(contactForm);
    let data = {
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message')
    };

    try {
        const response = await sendEmail(data);
        formMessage.textContent = response;
        formMessage.className = 'message success';
        contactForm.reset();
    } catch (error) {
        formMessage.textContent = error.message;
        formMessage.className = 'message error';
    }
};

let sendEmail = (data) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (data.email && data.message) {
                resolve("Your message has been sent successfully!");
            } else {
                reject(new Error("Failed to send message. Please try again."));
            }
        }, 100);
    });
};

contactForm.addEventListener('submit', submitForm);
