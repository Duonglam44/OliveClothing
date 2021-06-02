function loadCarousel(){
    var blockImg = document.querySelector('.blockImg');
    window.onresize = () => {
        if (window.outerWidth <= 800) {
            blockImg.style.display = "none";
            $('.owl-carousel').owlCarousel({
                loop: true,
                autoplay: true,
                autoplayTimeout: 4000,
                smartSpeed: 600,
                margin: 20,
                nav: false,
                dots: false,
                items: 1,
                responsiveClass: true
            })
        }
        else{
            window.location.reload();
        }
    }
    if(window.outerWidth <= 800){
        blockImg.style.display = "none";
        $('.owl-carousel').owlCarousel({
            loop: true,
            autoplay: true,
            autoplayTimeout: 4000,
            smartSpeed: 600,
            margin: 20,
            nav: false,
            dots: false,
            items: 1,
            responsiveClass: true
        })
    }
}
loadCarousel();