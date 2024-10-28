document.addEventListener("DOMContentLoaded", async function () {
    try {
        let response = await fetch('drinks.json'); 
        if (!response.ok) {
            throw new Error('Failed');
        }

        let x = await response.json();  

        let menuGrid = document.getElementById('menu-grid');

        x.forEach(item => {
            let menuItem = `
                <div class="menu-item">
                    <img src="images/${item.img_name}" alt="${item.name}">
                    <h3>${item.name}</h3>
                    <p>${item.description}</p>
                    <p>Price: ${item.price}</p>
                    <p>Ingredients: ${item.ingredients.join(', ')}</p>
                </div>
            `;
            menuGrid.innerHTML += menuItem;
        });
    } catch (error) {
        console.error('Error loading or parsing JSON:', error);
    }
});
