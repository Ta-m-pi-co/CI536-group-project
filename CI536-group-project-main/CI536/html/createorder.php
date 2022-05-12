<?php

include_once "config.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if(isset($_COOKIE[username])&&isset($_POST[name])&&isset($_POST[price])&&isset($_COOKIE[basket])){
        
        $username = $_COOKIE[username];
        $userId;
        $email;
        $fullname = urldecode($_POST[name]);
        $price = urldecode($_POST[price]);
        $basket = json_decode($_COOKIE[basket],true);  
        $conn = dbConnection();
    
        if($conn->connect_error == null){
            
            $sql = "SELECT `UserId`, `Email` FROM `Users` WHERE `Username` = '$username'";
            $result = mysqli_query($conn, $sql) or die("Error in Selecting " . mysqli_error($connection));
            $row = mysqli_fetch_assoc($result);
            $userId = $row[UserId];
            $email = $row[Email];
            
            $sql = "INSERT INTO `Orders`(`UserId`, `FullName`, `DateOfOrder`, `OrderPrice`) VALUES ('$userId','$fullname','" . date("Y/m/d") . "','$price')";
            $success = mysqli_query($conn, $sql) or die("Error in Selecting " . mysqli_error($connection));
            
            if ($success) {
                
                $orderId = mysqli_insert_id($conn);
                
                foreach($basket as $item) {
                    $sql = "INSERT INTO `OrderContents`(`OrderId`, `ProductId`) VALUES ('$orderId','" . $item['id'] . "')";
                    mysqli_query($conn, $sql) or die("Error in Selecting " . mysqli_error($connection));
                }
                http_response_code(201);
                
                $date = date("Y/m/d");
                $headers  = 'MIME-Version: 1.0' . "\r\n";
                $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
                $msg = "Hello $username!<br><br>This email is to confirm your order on the $date. <br>This order has been assigned the reference number $orderId.<br>This should arrive within 7 to 10 working days. Please don't hesitate to use our <a href='https://cw1019.brighton.domains/Laptopia/html/contact.html'>Contact</a> page if there are any concerns or queries regarding the order.<br>Thank you for shopping with Laptopia!<br><br>Kind regards,<br>The Laptopia Team";
                mail($email,"Laptopia: Reciept of Purchase",$msg,$headers);
                echo $orderId;
            }
        } else {
            http_response_code(500);
        }
    } else {
        http_response_code(400);
    }
} else {
    http_response_code(405);
}

?>