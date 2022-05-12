<?php
function dbConnection() {
    $conn = mysqli_connect('localhost', 'cw1019_admin', '0B+F4pp_~u{p', 'cw1019_laptopia_database');
    
    if (!$conn) {
        die("Connection failed: ".mysqli_connect_error());
    }
    
    return $conn;
}