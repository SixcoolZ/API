const body = document.body;

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'GET'
}).then((response) => response.json())
.then((data) => {
    const filteredData = data.filter((item) => item.id <= 5)
    
    filteredData.forEach((item) => {
        const p = document.createElement('p');
        const title = document.createElement('p');
        p.textContent = item.id;
        title.textContent = item.title;
        body.append(p, title);
    })
})

fetch('https://jsonplaceholder.typicode.com/photos', {
    method: 'GET'
}).then((response) => response.json())
.then((data) => {
    const images = data.filter((img) => img.id <= 10);

    images.forEach((img) => {
        const imgElement = document.createElement('img');
        imgElement.src = img.url;
        body.append(imgElement);
    })
})
