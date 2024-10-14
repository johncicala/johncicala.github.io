document.addEventListener("DOMContentLoaded", async function () {
    try {
        // Fetch the JSON file asynchronously
        const response = await fetch('data.json');  // Assumes the JSON file is in the same directory
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        const data = await response.json();  // Parse the JSON data
        
        const menuGrid = document.getElementById('menu-grid');

        // Loop through each item and generate HTML
        data.forEach(item => {
            const menuItem = `
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
