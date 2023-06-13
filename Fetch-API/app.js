const body = document.body;
const button = document.getElementsByTagName('button')[0]
const img = document.getElementsByTagName('img')[0]

// fetch("https://jsonplaceholder.typicode.com/posts", {
//     method: 'GET',
// }).then((response) => response.json())
// .then((data) => {
//     data.forEach((item) => {
//         const p = document.createElement('p');
//         const title = document.createElement('p');
//         p.textContent = item.id
//         title.textContent = item.title
//         body.append(p, title)
//     })
// })

button.addEventListener('click', function(){
    fetch('https://dog.ceo/api/breeds/image/random', {
        method: 'GET'
    }).then((res) => res.json())
    .then((image) => {
        img.setAttribute('src', image.message)
    })
})