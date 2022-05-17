<?php 
    $status = 0;
    $JSON;
    $requestType = true;
    $connect = mysqli_connect('localhost', 'cw1019_admin', '0B+F4pp_~u{p', 'cw1019_laptopia_database');
    header('content-type: application/json');

    if(isset($_POST['rating'])&&isset($_POST['content'])&&isset($_POST['productId'])) {
        $rating = $_POST['rating'];
        $content = $_POST['content'];
        $productId = $_POST['productId'];
    }
    if(isset($_GET['productId'])) {
        $productId = $_GET['productId'];
    }
    
    
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        if(!$connect) {
            $status = 500;
        }
        elseif (isset($_COOKIE['username'])) {
            $status = 201;
            $username = $_COOKIE['username'];
            $username = $connect->real_escape_string($username);
            $codedText = urldecode($content);
            $codedText = $connect->real_escape_string($codedText);
            $productIdString = $connect->real_escape_string($productId);
            $date = date("Y/m/d");
            $sqlSend = "INSERT INTO `Reviews` (`username`, `date`, `content`, `productId`, `rating`) VALUES ('$username', '$date', '$codedText', '$productIdString', '$rating')";
            mysqli_query($connect, $sqlSend);
            }else{
                $status = 400;
            }
        }else{
            $status = 405;
        }
    
    
    if ($_SERVER['REQUEST_METHOD'] === 'GET') {
        if(!$connect) {
            $status=500;
        }else{
            $status = 200;
            $sql = "SELECT * FROM Reviews WHERE productID = '$productId'";
            $result = mysqli_query($connect, $sql);
            if($result->num_rows >0) {
                $resultArr = [];
                while ($row = mysqli_fetch_assoc($result)){
                    (array_push($resultArr,$row));
                }
                $JSON = json_encode($resultArr);
            }else{
                $status=204;
            }                
        }
    }      
   
    //free output from memory and close connection
    http_response_code($status);
    mysqli_free_result($result);
    mysqli_close($connect);
    echo $JSON;
    
?>