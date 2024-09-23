document.addEventListener('DOMContentLoaded', () => {
    let slider = document.getElementById('slider');
    let colorMessage = document.getElementById('color-message');
    let colorSliderSection = document.getElementById('color-slider');
    let pictureChooserSection = document.getElementById('picture-chooser');
    let picture = document.getElementById('random-picture');
    let exercise1 = document.getElementById('exercise1');
    let exercise2 = document.getElementById('exercise2');

    document.querySelector('.select-exc').addEventListener('click', () => {
        let menuItems = document.querySelector('.excercises');
        let arrow = document.querySelector('.select-exc .arrow');

        if (menuItems.style.display === 'none' || !menuItems.style.display) {
            menuItems.style.display = 'block';
            arrow.innerHTML = '&#9650;'; 
        } else {
            menuItems.style.display = 'none';
            arrow.innerHTML = '&#9660;'; 
        }
    });

    slider.addEventListener('input', () => {
        let redValue = slider.value;
        colorSliderSection.style.backgroundColor = `rgb(${redValue}, 0, 0)`;

        if (redValue < 80) {
            colorMessage.textContent = "Cold";
        } else if (redValue < 160) {
            colorMessage.textContent = "Warmer";
        } else {
            colorMessage.textContent = "Hot!";
        }
    });
 
    let buttons = document.querySelectorAll('.btn');

    let clickMe = (size) => {
        picture.src = `https://picsum.photos/${size}`;
        picture.style.display = 'block';
    };
    
    document.getElementById('small').addEventListener('click', () => clickMe(200)); 
    document.getElementById('medium').addEventListener('click', () => clickMe(400)); 
    document.getElementById('large').addEventListener('click', () => clickMe(600)); 

    exercise1.addEventListener('click', () => {
        colorSliderSection.style.display = 'block';
        pictureChooserSection.style.display = 'none';
    });

    exercise2.addEventListener('click', () => {
        colorSliderSection.style.display = 'none';
        pictureChooserSection.style.display = 'block';
    });
});
