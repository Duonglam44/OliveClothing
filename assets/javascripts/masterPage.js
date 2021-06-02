AppearNavbar();
AppearEmailBtn();
popUpCart();


// 
function AppearEmailBtn() {
    var submit = document.querySelector('.email__wrapper a')
    var inputEmail = document.querySelector('.email')
    inputEmail.addEventListener('click', () => {
        submit.style.display = "inline-block";
    })
}
// 
function AppearNavbar() {
    var toggle = document.querySelector('.toggleMenu')
    var navBar = document.querySelector('.navbar')
    toggle.addEventListener('click', () => {
        navBar.classList.toggle('appearNav');
    })
    // 
    var root = document.querySelectorAll(".root")
    root.forEach(e => {
        var itemLink = e.querySelector('.itemLink__wrapper');
        var sub = e.querySelector('.sub')

        itemLink.addEventListener('click', () => {
            sub.classList.toggle('appearSub')
        })
    });
}

// cart popup

function popUpCart() {
    var header = document.querySelector('.header__upper');
    var cartItem = document.querySelector('.nav__cart');
    var cartPopUp = document.querySelector('.cart-popup')

    cartItem.addEventListener('click', () => {
        header.classList.toggle('changeWhiteBg');
        cartPopUp.classList.toggle('appearCartPopup');
    })
}
