document.querySelector("#email").addEventListener("keyup", () => {
    const form = document.getElementById("form");
    const email = document.getElementById("email").value;
    const emailMsg = document.getElementById("email-msg");
    const emailDiv = document.querySelector("#pg2 div.element:nth-child(3)");
    const pattern = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    
    if (email === "") {
        emailMsg.innerHTML = "";
        emailDiv.style.marginBottom = "0";
        document.getElementById("email").classList.remove("success", "error");
        return;
    } 

    emailDiv.style.marginBottom = "0.8rem";

    if (email.match(pattern)) {
        form.classList.add("valid");
        form.classList.remove("invalid");
        emailMsg.innerHTML = "Your email address is valid";
        emailMsg.style.color = "#00ff00";
        document.getElementById("email").classList.add("success");
        document.getElementById("email").classList.remove("error");
        return;
    }

    form.classList.remove("valid");
    form.classList.add("invalid");
    emailMsg.innerHTML = "Please enter a valid email address";
    emailMsg.style.color = "#ff0000";
    document.getElementById("email").classList.add("error");
})

document.querySelector("#signup-username").addEventListener("keyup", () => {
    const form = document.getElementById("form");
    const username = document.getElementById("signup-username").value;
    const usernameMsg = document.getElementById("username-msg");
    const usernameDiv = document.querySelector("#pg2 div.element:nth-child(4)");
    
    if (username === "") {
        usernameMsg.innerHTML = "";
        usernameDiv.style.marginBottom = "0";
        document.getElementById("signup-username").classList.remove("success", "error");
        return;
    } 

    usernameDiv.style.marginBottom = "1.4rem";

    if (username.length < 33 && username.length > 3) {
        form.classList.add("valid");
        form.classList.remove("invalid");
        usernameMsg.innerHTML = "Your username is valid";
        usernameMsg.style.color = "#00ff00";
        document.getElementById("signup-username").classList.add("success");
        document.getElementById("signup-username").classList.remove("error");
        return;
    }

    form.classList.remove("valid");
    form.classList.add("invalid");
    usernameMsg.innerHTML = "must be between 32 and 4 characters";
    usernameMsg.style.color = "#ff0000";
    document.getElementById("signup-username").classList.add("error");
})

document.querySelector("#signup-password").addEventListener("keyup", () => {
    const form = document.getElementById("form");
    const password = document.getElementById("signup-password").value;
    const passwordMsg = document.getElementById("password-msg");
    const passwordDiv = document.querySelector("#pg2 div.element:nth-child(5)");
    
    if (password === "") {
        passwordMsg.innerHTML = "";
        passwordDiv.style.marginBottom = "0";
        document.getElementById("signup-password").classList.remove("success", "error");
        return;
    } 

    passwordDiv.style.marginBottom = "1.4rem";

    if (password.length < 33 && password.length > 7 && (password.match(/[a-z]/g) || password.match(/[A-Z]/g)) && password.match(/[0-9]/g) && password.match(/[/[\[^\'£ $%^*()}{@:\'~?><>,;@\|\\\-\-_+\-¬\`\]]/g)) {
        form.classList.add("valid");
        form.classList.remove("invalid");
        passwordMsg.innerHTML = "Your password is valid";
        passwordMsg.style.color = "#00ff00";
        document.getElementById("signup-password").classList.add("success");
        document.getElementById("signup-password").classList.remove("error");
        return;
    }

    form.classList.remove("valid");
    form.classList.add("invalid");
    passwordMsg.innerHTML = "must be between 32 and 4 characters containing 1 letter, number & valid symbol";
    passwordMsg.style.color = "#ff0000";
    document.getElementById("signup-password").classList.add("error");
})
