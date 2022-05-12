<?php

include_once "config.php";

	$orderby = "Rating";
	$filters = "";
    $conn = dbConnection();

    if(isset($_GET['searchByAny'])){
        $searchByAny = $_GET['searchByAny'];
        
        if(isset($_GET['filter400'])){$filters .= " OR Price BETWEEN 0 AND 400 ";}
        if(isset($_GET['filter800'])){$filters .= " OR Price BETWEEN 400 AND 800 ";}
        if(isset($_GET['filter1200'])){$filters .= " OR Price BETWEEN 800 AND 1200 ";}
        if(isset($_GET['filterOnward'])){$filters .= " OR Price > 1200 ";}
        if(strlen($filters) != 0){
            $filters = substr($filters, 4);
            $filters = "AND (" . $filters . ")";
        }
        
        $screenFilters = '';
        
        if(isset($_GET['filter13'])){$screenFilters .= " OR Dimensions Like '%13%'";}
        if(isset($_GET['filter14'])){$screenFilters .= " OR Dimensions Like '%14%'";}
        if(isset($_GET['filter15'])){$screenFilters .= " OR Dimensions Like '%15%'";}
        if(isset($_GET['filter16'])){$screenFilters .= " OR Dimensions Like '%16%'";}
        if(isset($_GET['filter17'])){$screenFilters .= " OR Dimensions Like '%17%'";}
        if(strlen($screenFilters) != 0){
            $screenFilters = substr($screenFilters, 4);
            $filters = $filters . " AND (" . $screenFilters . ")";
        }
        
        $brandFilters = '';
        
        if(isset($_GET['filterHP'])){$brandFilters .= " OR Name Like '%HP%'";}
        if(isset($_GET['filterLeno'])){$brandFilters .= " OR Name Like '%Lenovo%'";}
        if(isset($_GET['filterDell'])){$brandFilters .= " OR Name Like '%Dell%'";}
        if(isset($_GET['filterAple'])){$brandFilters .= " OR Name Like '%Apple%'";}
        if(strlen($brandFilters) != 0){
            $brandFilters = substr($brandFilters, 4);
            $filters = $filters . " AND (" . $brandFilters . ")";
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
    
    else if(isset($_GET['searchById'])) {
        $searchById = $_GET['searchById'];
        
        if (!$conn) {
          http_response_code(500);
        } else {
            $searchById = $conn->real_escape_string($searchById);
            
            $sql = "SELECT * FROM Products WHERE ProductId = $searchById";
            
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