function FilterPopUp() {
    var filterNavItemList = document.querySelectorAll('.product__filter-navItem');
    filterNavItemList.forEach(e => {
        var clickItem = e.querySelector('.product__filter-navTitle');
        var sub = e.querySelector('.product__filter-subItems');
        if(clickItem != null){
            clickItem.addEventListener('click', () => {
                sub.classList.toggle('appear-subItems');
            })
        }
    });
}
FilterPopUp();



// fixed navbar when scroll 

var scrollTop = document.querySelector('.scrollTop');

scrollTop.addEventListener('click', () => {
    document.documentElement.scrollTo({
        top: 0 ,
        behavior: "smooth" 
    })
})
// 
var fullNav = document.querySelector('.fullNav');
var displayNav = document.querySelectorAll('.displayNav') 
fullNav.addEventListener('click', () => {
    displayNav.forEach(e => {
        e.classList.toggle('activeNav');
    })
})