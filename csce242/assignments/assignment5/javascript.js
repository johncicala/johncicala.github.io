var count = 0;
const myButton = document.getElementById("count");
myButton.onclick = () => {
    count++;
    document.getElementById("count").innerHTML = count
}

function refreshImage() {
    location.reload();
}

function moveSquare(value) {
    const square = document.getElementById("square");
    square.style.left = `${value}%`;
}


