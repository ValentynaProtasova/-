function getImage() {
    let randomImage = 1 + Math.floor(Math.random() * 4)
    document.write(`<img src="./img/${randomImage}.jpg">`)
}
getImage()