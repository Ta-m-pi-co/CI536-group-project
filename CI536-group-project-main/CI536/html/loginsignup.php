<?php
    
	$html = '';
	$conn = mysqli_connect('localhost', 'cw1019_admin', '0B+F4pp_~u{p', 'cw1019_laptopia_database');
	
	if(isset($_GET['lusername'])&&isset($_GET['lpassword'])){
    	$lUsername = $_GET['lusername'];
    	$lPassword = $_GET['lpassword'];
    	
    	if (!$conn) {
          $html = "Connection failed: " . $conn->connect_error;
        } else {
            $lUsername = $conn->real_escape_string($lUsername);
            $lPassword = $conn->real_escape_string($lPassword);
            
            $sql = "SELECT * FROM Users WHERE Username = '$lUsername' AND Password = '$lPassword'";
            
            $result = $conn->query($sql);
    
            if ($result->num_rows > 0) {
              while($row = $result->fetch_assoc()) {
                $html = $row["Username"] . " Logged in";
              }
            } else {
              $html = "Wrong Username or Password";
            }
            $conn->close();
        }
	}
	
	if(isset($_GET['susername'])&&isset($_GET['spassword'])&&isset($_GET['email'])){
    	$sUsername = $_GET['susername'];
    	$sPassword = $_GET['spassword'];
    	$email = $_GET['email'];
    	
    	if (!$conn) {
    	    
          $html = "Connection failed: " . $conn->connect_error;

        }else{
            $userValid = true;
            $sUsername = $conn->real_escape_string($sUsername);
            $sPassword = $conn->real_escape_string($sPassword);
            $email = $conn->real_escape_string($email);
            
            if (strlen($sUsername)<=3 or strlen($sUsername)>=33 or strlen($sPassword)<=3 or strlen($sPassword)>=33 or strlen($email)<=3 or strlen($email)>=33){
                $userValid = false;
                $html = "1 or more Inputs are Invalid";
            }else{
                $sql = "SELECT * FROM Users WHERE Username = '$sUsername'";
                $result = $conn->query($sql);
                if ($result->num_rows != 0){
                    $userValid = false;
                    $html = "Username already exists";
                }
                $sql = "SELECT * FROM Users WHERE Email = '$email'";
                $result = $conn->query($sql);
                if ($result->num_rows != 0){
                    $userValid = false;
                    $html = "Email already in use";
                }
            }
            if ($userValid == true){
            	
            	$sql = "INSERT INTO Users (Username, Password, Email)"
            	     . "VALUES ('$sUsername','$sPassword','$email')";
            	     
            	$success = $conn->query($sql);
            	if($success){
            		$id = $conn->insert_id;
            		$html = "Thanks, created record with id $id";
            	}
            }
        	$conn->close();
        }
	}
	
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <script src="../javascript/loginsignup.js"></script>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <script src="https://kit.fontawesome.com/b94f75224e.js" crossorigin="anonymous"></script> 
    <link rel="stylesheet" href="../css/loginsignup.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Laptopia | Login & Sign up</title>
</head>
<body>
    <img id="logo" src="../ImgSrc/laptopialogo3.png" alt="Laptopia Logo" width="150px">
    <div class="container">
        <div class="switch">
            <div class="login" onclick="scrollToLogin();">Login</div>
            <div class="signup" onclick="scrollToSignUp();">Sign Up</div>
        </div>

        <div class="outer">
            <form id="form">
                <div id="pg1" class="page">
                    <h3>Login to Laptopia</h3>
                    <label id="loginsignup-error" class="errorMessage"><?php echo $sql . $html ?></label>
                    <div class="element">
                        <input id="login-username" type="text" placeholder="Username">
                        <span class="fas fa-user"></span>
                    </div>
                    <div class="element">
                        <input id="login-password" type="password" placeholder="Password">
                        <span class="fas fa-lock"></span>
                        <span class="far fa-eye-slash" onclick="toggleLoginPwd(this)"></span>
                    </div>
                    <button id="login-btn" class="btn">Login</button>
                </div>

                <div id="pg2" class="page">
                    <h3>Sign up to Laptopia</h3>
                    <div class="element">
                        <input id="email" type="email" placeholder="Enter Email Address" autocomplete="off">
                        <span class="fas fa-envelope"></span>
                        <span id="email-msg"></span>
                    </div>
                    <div class="element">
                        <input id="signup-username" type="text" placeholder="Create Username">
                        <span class="fas fa-user"></span>
                    </div>
                    <div class="element">
                        <input id="signup-password" type="password" placeholder="Create Password">
                        <span class="fas fa-lock"></span>
                        <span class="far fa-eye-slash" onclick="toggleSignUpPwd(this)"></span>
                    </div>
                    <button id="signup-btn" class="btn">Sign up</button>
                </div>
            </form>
        </div>
    </div>
    <script src="../javascript/index.js"></script>
    <script src="../javascript/validation.js"></script>
</body>
</html>