const images = [
    {"https://i.imgur.com/gMFzfW3.png", 
    "https://i.imgur.com/gMFzfW3.png", 
    "https://i.imgur.com/gMFzfW3.png"
]  


let html = images.map((img, i) => 
    `<img src=${img}>`
)

html.forEach(img => {
    const tag = document.createElement('div');
    tag.innerHTML = img;
    document.querySelector('.photos').appendChild(tag);
})