
fetch('j.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    
    const jsonDataElement = document.getElementById('json-data');
    jsonDataElement.textContent = JSON.stringify(data, null, 2); 
  })
  .catch(error => {
    console.error('Error fetching the JSON:', error);
  });
