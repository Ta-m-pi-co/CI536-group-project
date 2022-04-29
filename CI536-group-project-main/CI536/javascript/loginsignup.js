window.addEventListener('load', function(evt){

    const signupBtn = document.querySelector('#signup-btn');
    const loginBtn = document.querySelector('#login-btn');
    const loginUsername = document.querySelector('#login-username');
    const loginPassword = document.querySelector('#login-password');
    const email = document.querySelector('#email');
    const signupUsername = document.querySelector('#signup-username');
    const signupPassword = document.querySelector('#signup-password');
    const signupErrorMessage = document.querySelector('#signup-error');
    
    if(signupErrorMessage.textContent.length !== 0){ scrollToSignUp(); }
    
    signupBtn.addEventListener('click', function(evt){
        evt.preventDefault();
        let fieldsOkSign = true;

        if(signupUsername.value.trim().length === 0 || 
           signupPassword.value.trim().length === 0 || 
           email.value.trim().length === 0) {
            fieldsOkSign = false;
        }
        
        if (fieldsOkSign === true) {
            window.location.href = 'https://cw1019.brighton.domains/Laptopia/html/loginsignup.php?susername=' + signupUsername.value.trim() + '&spassword=' +  signupPassword.value.trim()+ '&email=' +  email.value.trim();
        }
    })

    loginBtn.addEventListener('click', function(evt){
        evt.preventDefault();
        let fieldsOk = true;
        
        if(loginUsername.value.trim().length === 0 || loginPassword.value.trim().length === 0) {
            fieldsOk = false;
        }
        
        if (fieldsOk === true) {
            window.location.href = 'https://cw1019.brighton.domains/Laptopia/html/loginsignup.php?lusername=' + loginUsername.value.trim() + '&lpassword=' +  loginPassword.value.trim();
        }
    })
})

let current = 1;
    
    /**
     * Scrolls to the LOGIN form in 'loginsignup.html', which simultaneously hides the SIGN UP form.
     */
    function scrollToLogin() {
        document.querySelector("#form").style.marginLeft="0";
        document.querySelector(".signup").style.background = "none";
        document.querySelector(".login").style.background = "linear-gradient(45deg, #8765fa, #e400ab)";
        document.querySelectorAll(".switch")[current - 1].classList.remove("active");
    }
    
    /**
     * Scrolls to the SIGN UP form in 'loginsignup.html', which simultaneously hides the LOGIN form.
     */
    function scrollToSignUp() {
        document.querySelector("#form").style.marginLeft="-100%";
        document.querySelector(".login").style.background = "none";
        document.querySelector(".signup").style.background = "linear-gradient(45deg, #8765fa, #e400ab)";
        document.querySelectorAll(".switch")[current - 1].classList.add("active");
    }
    
    /**
     * Toggles the password input type between 'password' and 'text' in the LOGIN form, allowing the
     * user to see the characters they entered.  
     * @param {Event} e - The event, which in this case is a click event 
     */
    function toggleLoginPwd(e) {
        document.querySelector("#login-password").type = (document.querySelector("#login-password").type == "password") ? "text" : "password";
        e.classList.value = (e.classList.value == "far fa-eye") ? "far fa-eye-slash" : "far fa-eye"; 
    }
    
    /**
     * Toggles the password input type between 'password' and 'text' in the SIGN UP form, allowing the
     * user to see the characters they entered.
     * @param {Event} e - The event, which in this case is a click event 
     */
    function toggleSignUpPwd(e) {
        document.querySelector("#signup-password").type = (document.querySelector("#signup-password").type == "password") ? "text" : "password";
        e.classList.value = (e.classList.value == "far fa-eye") ? "far fa-eye-slash" : "far fa-eye"; 
    }
