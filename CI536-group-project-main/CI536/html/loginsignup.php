<?php
    
	$errorL = '';
	$errorS = '';
	
	$conn = mysqli_connect('localhost', 'cw1019_admin', '0B+F4pp_~u{p', 'cw1019_laptopia_database');
	
	if(isset($_GET['lusername'])&&isset($_GET['lpassword'])){
    	$lUsername = $_GET['lusername'];
    	$lPassword = $_GET['lpassword'];
    	
    	if (!$conn) {
          http_response_code(500);
        } else {
            $lUsername = $conn->real_escape_string($lUsername);
            $lPassword = $conn->real_escape_string($lPassword);
            
            $sql = "SELECT * FROM Users WHERE Username = '$lUsername' AND Password = '$lPassword'";
            
            $result = $conn->query($sql);
    
            if ($result->num_rows > 0) {
              while($row = $result->fetch_assoc()) {
                $errorL = $row["Username"] . " Logged in";
                if(isset($_COOKIE['username'])){
                    setcookie('username', time()-3600, "cw1019.brighton.domains");
                }
                setcookie('username', $_GET['lusername'], time()+3600, "cw1019.brighton.domains");
                header("Location: https://cw1019.brighton.domains/Laptopia/html/");
              }
            } else {
              $errorL = "Wrong Username or Password";
            }
            $conn->close();
        }
	}
	
	if(isset($_GET['susername'])&&isset($_GET['spassword'])&&isset($_GET['email'])){
    	$sUsername = $_GET['susername'];
    	$sPassword = $_GET['spassword'];
    	$email = $_GET['email'];
    	
    	if (!$conn) {
    	    
          http_response_code(500);

        }else{
            $userValid = true;
            $sUsername = $conn->real_escape_string($sUsername);
            $sPassword = $conn->real_escape_string($sPassword);
            $email = $conn->real_escape_string($email);
            
            if (strlen($sUsername)<=3 or strlen($sUsername)>=33 or strlen($sPassword)<=3 or strlen($sPassword)>=33 or strlen($email)<=3 or strlen($email)>=33){
                $userValid = false;
                $errorS = "1 or more Inputs are Invalid";
            }else{
                $sql = "SELECT * FROM Users WHERE Username = '$sUsername'";
                $result = $conn->query($sql);
                if ($result->num_rows != 0){
                    $userValid = false;
                    $errorS = "Username already exists";
                }
                $sql = "SELECT * FROM Users WHERE Email = '$email'";
                $result = $conn->query($sql);
                if ($result->num_rows != 0){
                    $userValid = false;
                    $errorS = "Email already in use";
                }
            }
            if ($userValid == true){
            	
            	$sql = "INSERT INTO Users (Username, Password, Email)"
            	     . "VALUES ('$sUsername','$sPassword','$email')";
            	     
            	$success = $conn->query($sql);
            	if($success){
            		$id = $conn->insert_id;
            		$errorS = "Thanks, created record with id $id";
            		if(isset($_COOKIE['username'])){
                        setcookie('username', time()-3600, "cw1019.brighton.domains");
                    }
                    setcookie('username', $_GET['susername'], time()+3600, "cw1019.brighton.domains");
                    header("Location: https://cw1019.brighton.domains/Laptopia/html/");
                	}
            }
        	$conn->close();
        }
	}
	
?>
<!DOCTYPE html>
<html lang="en">
<head>
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
                    <label id="login-error" class="errorMessage"><?php echo $errorL ?></label>
                    <div class="element">
                        <input id="login-username" type="text" placeholder="Username" value="<?php echo $lUsername ?>">
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
                    <label id="signup-error" class="errorMessage"><?php echo $errorS ?></label>
                    <div class="element">
                        <input id="email" type="email" placeholder="Enter Email Address" autocomplete="off" value="<?php echo $email ?>">
                        <span class="fas fa-envelope"></span>
                        <span id="email-msg"></span>
                    </div>
                    <div class="element">
                        <input id="signup-username" type="text" placeholder="Create Username" value="<?php echo $sUsername ?>">
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
    <script src="../javascript/loginsignup.js"></script>
    <script src="../javascript/validation.js"></script>
</body>
</html>