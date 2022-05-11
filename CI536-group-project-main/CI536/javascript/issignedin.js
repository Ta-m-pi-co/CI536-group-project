window.addEventListener('load', function(evt){
    function getCookie(cname) {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for(let i = 0; i <ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    function checkCookie() {
        let username = getCookie("username");
        if (username !== "") {
            var logBtn = document.querySelector('#logSign');
            logBtn.textContent = "Log Out of "+username;

            logBtn.addEventListener("click", function(evt){
                document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
                document.cookie = "basket=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            })
        }
    }
    checkCookie();
})