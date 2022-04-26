<?php

	$conn = mysqli_connect('localhost', 'cw1019_admin', '0B+F4pp_~u{p', 'cw1019_laptopia_database');
	$orderby = "Rating";
	$filters = "";

    if(isset($_GET['searchByAny'])){
        $searchByAny = $_GET['searchByAny'];
        
        if(isset($_GET['filter400'])){$filters .= urldecode($_GET['filter400']);}
        if(isset($_GET['filter800'])){$filters .= urldecode($_GET['filter800']);}
        if(isset($_GET['filter1200'])){$filters .= urldecode($_GET['filter1200']);}
        if(strlen($filters) != 0){
            $filters = substr($filters, 4);
            $filters = "AND " . $filters;
        }
        
        if (!$conn) {
          http_response_code(500);
        } else {
            $searchByAny = $conn->real_escape_string($searchByAny);
            
            $sql = "SELECT * FROM Products WHERE (Name LIKE \"%$searchByAny%\" OR OS LIKE \"%$searchByAny%\" OR CPU LIKE \"%$searchByAny%\" OR RAM LIKE \"%$searchByAny%\" OR GraphicsCard LIKE \"%$searchByAny%\" OR Storage LIKE \"%$searchByAny%\" OR Dimensions LIKE \"%$searchByAny%\") $filters ORDER BY $orderby DESC";
            
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