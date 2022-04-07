window.addEventListener('load', function(evt){

    var signupBtn = document.querySelector('#signup-btn'),
    loginBtn = document.querySelector('#login-btn'),
    loginUsername = document.querySelector('#login-username');
    loginPassword = document.querySelector('#login-password');
    email = document.querySelector('#email');
    signupUsername = document.querySelector('#signup-username');
    signupPassword = document.querySelector('#signup-password');

    signupBtn.addEventListener('click', function(evt){
        evt.preventDefault();
        fieldsOkSign = true;
        if(signupUsername.value.trim().length === 0) {
            fieldsOkSign = false;
        } else if (signupPassword.value.trim().length === 0) {
            fieldsOkSign = false;
        } else if (email.value.trim().length === 0) {
            fieldsOkSign = false;
        }
        if (fieldsOkSign === true) {
            window.location.href = 'https://cw1019.brighton.domains/Laptopia/html/loginsignup.php?susername=' + signupUsername.value.trim() + '&spassword=' +  signupPassword.value.trim()+ '&email=' +  email.value.trim();
        }
    })

    loginBtn.addEventListener('click', function(evt){
        evt.preventDefault();
        fieldsOk = true;
        if(loginUsername.value.trim().length === 0) {
        fieldsOk = false;
        } else if (loginPassword.value.trim().length === 0) {
            fieldsOk = false;
        }
        if (fieldsOk === true) {
        window.location.href = 'https://cw1019.brighton.domains/Laptopia/html/loginsignup.php?lusername=' + loginUsername.value.trim() + '&lpassword=' +  loginPassword.value.trim();
        }
    })
})