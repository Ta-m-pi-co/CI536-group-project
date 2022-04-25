<?php

	$conn = mysqli_connect('localhost', 'cw1019_admin', '0B+F4pp_~u{p', 'cw1019_laptopia_database');
	$orderby = "Rating";

    if(isset($_GET['searchByAny'])){
        $searchByAny = $_GET['searchByAny'];
        
        if (!$conn) {
          http_response_code(500);
        } else {
            $searchByAny = $conn->real_escape_string($searchByAny);
            
            $sql = "SELECT * FROM Products WHERE Name LIKE \"%$searchByAny%\" OR OS LIKE \"%$searchByAny%\" OR CPU LIKE \"%$searchByAny%\" OR RAM LIKE \"%$searchByAny%\" OR GraphicsCard LIKE \"%$searchByAny%\" OR Storage LIKE \"%$searchByAny%\" OR Dimensions LIKE \"%$searchByAny%\" ORDER BY $orderby DESC";
            
            $result = mysqli_query($conn, $sql) or die("Error in Selecting " . mysqli_error($connection));
            $rows = array();
            while($row =mysqli_fetch_assoc($result))
            {
                $rows[] = $row;
            }
            echo json_encode($rows);
        }
    } 
    
    else if(isset($_GET['searchByName'])) {
        $searchByName = $_GET['searchByName'];
        
        if (!$conn) {
          http_response_code(500);
        } else {
            $searchByName = $conn->real_escape_string($searchByName);
            
            $sql = "SELECT * FROM Products WHERE Name LIKE \"%$searchByName%\"";
            
            $result = mysqli_query($conn, $sql) or die("Error in Selecting " . mysqli_error($connection));
            $rows = array();
            while($row =mysqli_fetch_assoc($result))
            {
                $rows[] = $row;
            }
            echo json_encode($rows);
        }
    }
?>