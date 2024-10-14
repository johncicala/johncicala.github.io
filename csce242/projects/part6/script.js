document.addEventListener("DOMContentLoaded", async function () {
    try {
        const response = await fetch('dinner.json');  
        if (!response.ok) {
            throw new Error('Failed');
        }
        
        const data = await response.json(); 
        
        const menuGrid = document.getElementById('menu-grid');

        data.forEach(item => {
            const menuItem = `
                <div class="menu-item">
                    <img src="images/${item.img_name}" alt="${item.name}">
                    <h3>${item.name}</h3>
                    <p>${item.description}</p>
                    <p>Price: ${item.price}</p>
                    <p>Main Ingredients: ${item.ingredients.join(', ')}</p>
                </div>
            `;
            menuGrid.innerHTML += menuItem;
        });
    } catch (error) {
        console.error('Error loading or parsing JSON:', error);
    }
});
