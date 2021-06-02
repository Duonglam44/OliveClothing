function UpDownNumber() {
    var insc = document.querySelectorAll('.inscrease');
    var dec = document.querySelectorAll('.descrease');
    var quali = document.querySelectorAll('.quality');
    // console.log(quali);
    for (let i = 0; i < insc.length; i++) {
        insc[i].onclick = () => {
            quali[i].value++;
        }
    }
    for (let i = 0; i < dec.length; i++) {
        dec[i].onclick = () => {
            if (quali[i].value > 1)
                quali[i].value--;
        }
    }
}
// 
function AppearFrom(){
    var forms = document.querySelectorAll('.cart__total-form')
    var cartValueOpen = document.querySelectorAll('.cartValue-open')
    var cartValueClose = document.querySelectorAll('.cartValue-close');

    for (let i = 0; i < cartValueOpen.length; i++) {
        cartValueOpen[i].onclick = () => {
            cartValueOpen[i].style.display = 'none';
            cartValueClose[i].style.display = 'block';

            forms[i].style.display = 'block';
        }

        cartValueClose[i].onclick = () => {
            cartValueOpen[i].style.display = 'block';
            cartValueClose[i].style.display = 'none';
            forms[i].style.display = 'none';
        }
    }
}
// 
function AppearAboutSection() {
    var cartBox = document.querySelectorAll('.aboutBox');
    var cartContent = document.querySelectorAll('.aboutBox-content');
    function clickBox(index) {
        cartContent.forEach(index => {
            index.style.display = 'none';
        });

        cartContent[index].style.display = 'block';
    }
    for (let i = 0; i < cartBox.length; i++) {
        cartBox[i].addEventListener('click', () => {
            cartContent.forEach(e => {
                e.style.display = 'none';
            });
            cartContent[i].style.display = 'block';
        })
    }
}

UpDownNumber();
AppearFrom();
AppearAboutSection();