document.addEventListener('DOMContentLoaded', async () => {
    let iceCreamGrid = document.getElementById('main-grid');
    
    try 
    {
        let x = await fetch('https://portiaportia.github.io/json/ice-creams.json');
        let iceCream = await x.json();

        iceCream.forEach(iceCream => {
            const iceCreamDiv = document.createElement('div');
            iceCreamDiv.classList.add('item');

            iceCreamDiv.innerHTML = `<img src="https://portiaportia.github.io/json/images/ice-creams/${iceCream.image}" alt="${iceCream.name}"><div class="overlay">${iceCream.name}</div>`;

            iceCreamGrid.appendChild(iceCreamDiv);
        });

    } 
    catch (error) 
    {
        console.error('Something is wrong.', error);
    }
});
