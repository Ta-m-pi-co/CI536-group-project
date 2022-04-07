window.addEventListener('load', function(evt){

    var signupBtn = document.querySelector('#signup-btn'),
    loginBtn = document.querySelector('#login-btn'),
    loginUsername = document.querySelector('#login-username');
    loginPassword = document.querySelector('#login-password');
    email = document.querySelector('#email');
    signupUsername = document.querySelector('#signup-username');
    signupPassword = document.querySelector('#signup-password');
    fieldsOk = true;
    fieldsOkSign = true;
    emailValidate = email.match(/\S+@\S+.\S+/);

    if(loginUsername.length === 0) {
        fieldsOk = false;
    } else if (loginPassword.length === 0) {
        fieldsOk = false;
    }

    if(loginUsername.length === 0) {
        fieldsOkSign = false;
    } else if (loginPassword.length === 0) {
        fieldsOkSign = false;
    } else if (email.length === 0) {
        fieldsOkSign = false;
    } else if (emailValidate === null) {
        fieldsOkSign = false;
    }

    signupBtn.addEventListener('click', function(evt){
    evt.preventDefault();
        if (fieldsOk === true) {
            window.location.href = 'https://cw1019.brighton.domains/Laptopia/html/loginsignup.php?susername=' + signupUsername.value.trim() + '&spassword=' +  signupPassword.value.trim()+ '&email=' +  email.value.trim();
        }
    })

    loginBtn.addEventListener('click', function(evt){
    evt.preventDefault();
        if (fieldsOkSign === true) {
        window.location.href = 'https://cw1019.brighton.domains/Laptopia/html/loginsignup.php?lusername=' + loginUsername.value.trim() + '&lpassword=' +  loginPassword.value.trim();
        }
    })
})
