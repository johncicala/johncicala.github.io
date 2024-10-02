let drawButton = document.getElementById('btn');
let emptyBox = document.getElementById('box');
let errorMessage = document.getElementById('error-message');
let starInfo = document.getElementById('starData');

drawButton.addEventListener('click', () => {
    let starCount = parseInt(document.getElementById('starCount').value);

    errorMessage.textContent = '';
    starInfo.textContent = '';

    if (isNaN(starCount) || starCount <= 0) {
        errorMessage.textContent = 'Please enter a valid number that is larger than zero.';
        return;
    }

    for (let i = 1; i <= starCount; i++) {

        let star = document.createElement('div');
        star.classList.add('star');
        star.textContent = '\u2736';

        let x = Math.random() * (emptyBox.clientWidth - 18); 
        let y = Math.random() * (emptyBox.clientHeight - 18);

        star.style.left = `${x}px`;
        star.style.top = `${y}px`;

        star.addEventListener('click', () => {
            starInfo.textContent = `You clicked star ${i}`;
        });

        emptyBox.appendChild(star);
    }
});
