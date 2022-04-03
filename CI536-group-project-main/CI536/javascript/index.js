let current = 1;
    
function tab2() {
    document.querySelector("#form").style.marginLeft="-100%";
    document.querySelector(".login").style.background = "none";
    document.querySelector(".signup").style.background = "linear-gradient(45deg, #8765fa, #e400ab)";
    document.querySelectorAll(".switch")[current - 1].classList.add("active");
}
    
function tab1() {
    document.querySelector("#form").style.marginLeft="0";
    document.querySelector(".signup").style.background = "none";
    document.querySelector(".login").style.background = "linear-gradient(45deg, #8765fa, #e400ab)";
    document.querySelectorAll(".switch")[current - 1].classList.remove("active");
}

function togglePassword1(e) {
    document.querySelector("#login-password").type = (document.querySelector("#login-password").type == "password") ? "text" : "password";
    e.classList.value = (e.classList.value == "far fa-eye") ? "far fa-eye-slash" : "far fa-eye"; 
}

function togglePassword2(e) {
    document.querySelector("#signup-password").type = (document.querySelector("#signup-password").type == "password") ? "text" : "password";
    e.classList.value = (e.classList.value == "far fa-eye") ? "far fa-eye-slash" : "far fa-eye"; 
}