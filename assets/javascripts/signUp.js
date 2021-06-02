checkAllInput();
checkPass();

// kiểm tra input rỗng
function checkAllInput() {
    var formList = document.querySelectorAll('.require');
    formList.forEach(e => {
        var input = e.querySelector('input');
        var warning = e.querySelector('span')
        input.addEventListener("focusout", function () {
            if (input.value == "")
                warning.classList.add('warning-active')
            else warning.classList.remove('warning-active');
        });
    })
}
// kiểm tra khớp password
function checkPass() {
    var password = document.getElementById('password');
    var checkPass = document.querySelector('.passwordCheck')
    var rePassword = document.getElementById('rePassword');
    var checkRePass = document.querySelector('.rePasswordCheck');
    password.addEventListener('input', () => {
        if (password.value.length <= 6) {
            checkPass.innerHTML = '<i class="fal fa-times"></i> Passwords must be at least 7 characters';
            checkPass.style.display = 'block';
        }
        else {
            checkPass.style.display = 'none';
        }
    })
    rePassword.addEventListener("input", () => {
        if (rePassword.value == '') {
            checkRePass.innerHTML = '<i class="fal fa-times"></i> You must reentered a password.';
        }
        else if (password.value != rePassword.value) {
            checkRePass.innerHTML = '<i class="fal fa-times"></i> Your passwords do not match.';
            checkRePass.style.display = 'block';
        }
        else {
            checkRePass.style.display = 'none';
        }
    });
}

