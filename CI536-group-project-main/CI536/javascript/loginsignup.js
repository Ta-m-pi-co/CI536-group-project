window.addEventListener('load', function(evt){

    var signupBtn = document.querySelector("#signup-btn")
    loginBtn = document.querySelector("#login-btn");

    signupBtn.addEventListener('submit', function(evt){
        evt.preventDefault()
        //check fields are valid and submit
    })

    loginBtn.addEventListener('submit', function(evt){
        evt.preventDefault()
        
        var mysql = require('mysql');

        var con = mysql.createConnection({
        host: "localhost",
        user: "yourusername",
        password: "yourpassword",
        database: "mydb"
        });

        var usernameT = document.querySelector("#login-username").value.trim();
        var passwordT = document.querySelector("#login-password").value.trim();

        con.connect(function(err) {
            if (err) throw err;
            con.query("SELECT * FROM Users WHERE Username = '" + usernameT + "' AND Password = '" + passwordT + "'", function (err, result) {
              if (err) throw err;
              console.log(result);
            });
        });

        //check fields are valid and submit
    })
})