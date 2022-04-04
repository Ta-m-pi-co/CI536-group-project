window.addEventListener('load', function(evt){

    var signupBtn = document.querySelector("#signup-btn")
    loginUsername = document.querySelector("#login-username")
    loginPassword = document.querySelector("#login-password")
    signupUsername = document.querySelector("#signup-username")
    signupPassword = document.querySelector("#signup-password")
    signupEmail = document.querySelector("#email")
    loginBtn = document.querySelector("#login-btn");

    signupBtn.addEventListener('submit', function(evt){
        evt.preventDefault()
        //check fields are valid and submit
    })

    loginBtn.addEventListener('submit', function(evt){
        evt.preventDefault()
        //check fields are valid and submit
    })
})