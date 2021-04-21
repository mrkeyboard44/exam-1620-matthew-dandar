const albums = [
    { name: "Album 1", price: 12.99, inCart: false },
    { name: "Album 2", price: 14.99, inCart: false },
    { name: "Album 3", price: 9.99, inCart: false },
    { name: "Album 4", price: 19.99, inCart: false }
];

function defineAddItemSection() {
    html = '<div class="cart-row">\
        <span>IMAGE</span>\
        <span>NAME</span>\
        <span>PRICE</span>\
        </div>'
    return html
}

function addItemToCart(albumNumber) {
    if (albumNumber == 1) {
        console.log(albums[0])
        const cartSection = document.querySelector('.cart')
        cartSection.insertAdjacentHTML('afterbegin', defineAddItemSection())
    }
}
