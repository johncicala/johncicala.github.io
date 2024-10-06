class Bird {
    constructor (name, image, size, lifespan, food, habitat, fact) {
        this.name = name;
        this.image = image;
        this.size = size;
        this.lifespan = lifespan;
        this.food = food;
        this.habitat = habitat;
        this.fact = fact;
    }

    getSection = () => `
        <div class="bird-card" onclick="openModal('${this.name}')">
            <img src="${this.image}" alt="${this.name}">
            <p>${this.name}</p>
        </div>
    `;

    getExpandedSection = () => `
        <div class="modal" id="${this.name}">
            <div class="modal-content">
                <span class="close" onclick="closeModal('${this.name}')">&times;</span>
                <p>${this.name}</p>
                <img src="${this.image}" alt="${this.name}">
                <p><strong>Size:</strong> ${this.size}</p>
                <p><strong>Lifespan:</strong> ${this.lifespan}</p>
                <p><strong>Food:</strong> ${this.food}</p>
                <p><strong>Habitat:</strong> ${this.habitat}</p>
                <p><strong>Interesting Fact:</strong> ${this.fact}</p>
            </div>
        </div>
    `;
}

let birds = [
    new Bird("Hummingbird", "images/hummingbird.avif", "2.5 inches", "3-5 years", "Nectar", "Trees", "They're nicknamed 'Hummers'"),
    new Bird("Blue Jay", "images/bluejay.avif", "10-12 inches", "7 years", "Nuts, seeds, insects", "Forests, cities", "One of the smartest birds."),
    new Bird("Cardinal", "images/cardinal.avif", "8-9 inches", "3 years", "Seeds, fruit, insects", "Forests, gardens", "Known for their striking red color."),
    new Bird("Robin", "images/robin.avif", "10 inches", "2 years", "Insects, worms, fruit", "Forests, gardens", "Usually the first birds to chirp in the morning.")
];

let loadBirds = () => {
    let birdContainer = document.getElementById('bird-container');
    let birdCardsHtml = ''; 
    let birdModalsHtml = ''; 

    birds.forEach(bird => {
        birdCardsHtml += bird.getSection(); 
        birdModalsHtml += bird.getExpandedSection();
    });

    birdContainer.innerHTML = birdCardsHtml;

    document.body.innerHTML += birdModalsHtml;
};

let openModal = id => {
    document.getElementById(id).style.display = 'block';
};

let closeModal = id => {
    document.getElementById(id).style.display = 'none';
};

window.onload = () => loadBirds();
