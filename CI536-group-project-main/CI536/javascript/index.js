const switcheroo = document.querySelector(".switch");
let current = 1;
    
function tab2() {
    document.querySelector("#form").style.marginLeft="-100%";
    document.querySelector(".login").style.background = "none";
    document.querySelector(".signup").style.background = "linear-gradient(45deg, #00d5fc, #046af6)";
    document.querySelectorAll(".switch")[current - 1].classList.add("active");
}
    
function tab1() {
    document.querySelector("#form").style.marginLeft="0";
    document.querySelector(".signup").style.background = "none";
    document.querySelector(".login").style.background = "linear-gradient(45deg, #00d5fc, #046af6)";
    document.querySelectorAll(".switch")[current - 1].classList.remove("active");
}

