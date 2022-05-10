<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if(isset($_COOKIE[username])&&isset($_POST[name])&&isset($_POST[price])&&isset($_COOKIE[basket])){
        
        $username = $_COOKIE[username];
        $userId;
        $email;
        $fullname = urldecode($_POST[name]);
        $price = urldecode($_POST[price]);
        $basket = json_decode($_COOKIE[basket],true);
          
        $conn = mysqli_connect('localhost', 'cw1019_admin', '0B+F4pp_~u{p', 'cw1019_laptopia_database');
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

                $msg = "Thank you $username, $orderId is your order number\nContact Us from our site if you require further assistance";
                mail($email,"Laptopia: Reciept of Purchase",$msg);
            }
        }else{
            http_response_code(500);
        }
    }else{
        http_response_code(400);
    }
}else{
    http_response_code(405);
}

?>