document.querySelector("#email").addEventListener("keyup", () => {
    const form = document.getElementById("form");
    const email = document.getElementById("email").value;
    const emailMsg = document.getElementById("email-msg");
    const createUsername = document.querySelector("#pg2 div.element:nth-child(3)");
    const pattern = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    
    if (email == "") {
        emailMsg.innerHTML = "";
        createUsername.style.marginTop = "0";
        return;
    } 

    createUsername.style.marginTop = "0.8rem";

    if (email.match(pattern)) {
        form.classList.add("valid");
        form.classList.remove("invalid");
        email.classList.add("success");
        email.classList.remove("error");
        emailMsg.innerHTML = "Your email address is valid :)";
        emailMsg.style.color = "#00ff00";
        return;
    }

    form.classList.add("invalid");
    form.classList.remove("valid");
    email.classList.add("error");
    email.classList.remove("success");
    emailMsg.innerHTML = "Please enter a valid email address";
    emailMsg.style.color = "#ff0000";
})

document.querySelector("#login-username").addEventListener("keyup", () => {
    //validation not less than 4 or more than 32
})