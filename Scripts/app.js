const albums = [
    { name: "Album 1", price: 12.99, inCart: false },
    { name: "Album 2", price: 14.99, inCart: false },
    { name: "Album 3", price: 9.99, inCart: false },
    { name: "Album 4", price: 19.99, inCart: false }
];

function defineAddItemSection() {
    html = '<div class="cart-item-row"></div>'
    return html
}
function defineAddItem(albumNumber) {
    html = '<span>IMAGE</span>\
        <span>' + albums[albumNumber]['name'] + '</span>\
        <span>' + albums[albumNumber]['price'] + '</span>'
    return html
}

const cartSection = document.querySelector('.cart')
        cartSection.insertAdjacentHTML('afterbegin', defineAddItemSection())

function addItemToCart(albumNumber) {
    if (albumNumber == 1) {
        console.log(albums[0])
        const cartSection = document.querySelector('.cart-item-row')
        cartSection.insertAdjacentHTML('afterend', defineAddItem(0))
        albums[0]['inCart'] = true;
    }
    if (albumNumber == 2) {
        console.log(albums[1])
        const cartSection = document.querySelector('.cart-item-row')
        cartSection.insertAdjacentHTML('afterend', defineAddItem(1))
    }
    if (albumNumber == 3) {
        console.log(albums[2])
        const cartSection = document.querySelector('.cart-item-row')
        cartSection.insertAdjacentHTML('afterend', defineAddItem(2))
    }
    if (albumNumber == 4) {
        console.log(albums[3])
        const cartSection = document.querySelector('.cart-item-row')
        cartSection.insertAdjacentHTML('afterend', defineAddItem(3))
    }
}
