
var inputList = document.querySelectorAll('.input');
inputList.forEach(e => {
    var inputform = e.querySelector('input');
    var warning = e.querySelector('span');
    inputform.addEventListener('focusout', () => {
        if (inputform.value == "")
            warning.classList.add('warning-active')
        else warning.classList.remove('warning-active');
    })
})