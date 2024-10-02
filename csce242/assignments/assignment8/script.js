let theArray = {
    "birthday": { src: 'images/birthday.jpg', title: 'Birthday', description: 'Party time!' },
    "clown": { src: 'images/clown.jpg', title: 'Clown', description: 'Want to hear a joke?' },
    "rain": { src: 'images/rain.jpg', title: 'Rain', description: 'Bring an umbrella.' },
    "read": { src: 'images/read.jpg', title: 'Read', description: 'Hit the books!' },
    "shovel": { src: 'images/shovel.jpg', title: 'Shovel', description: 'Time to dig!' },
    "work": { src: 'images/work.jpg', title: 'Work', description: 'Studying hard.' }
  };
  
  let bigDiv = document.getElementById('mainId');
  
  for (let x in theArray) {
    if (theArray.hasOwnProperty(x)) {
      const image = theArray[x];
  
      let theImage = document.createElement('div');
      theImage.className = 'img';
      
      const img = document.createElement('img');
      img.src = image.src;
      img.alt = image.title;
 
      img.addEventListener('click', () => {
        document.getElementById('title').textContent = image.title;
        document.getElementById('desc').textContent = image.description;
        document.getElementById('descriptionId').style.display = 'block'; 
      });
  
      theImage.appendChild(img);
      bigDiv.appendChild(theImage);
    }
  }
  