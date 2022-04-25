<?php
$conn = mysqli_connect('localhost', 'cw1019_admin', '0B+F4pp_~u{p', 'cw1019_laptopia_database');
$Id; $Name; $Price; $OS; $CPU; $RAM; $GraphicsCard; $Storage; $Dimentions; $Image; $Rating; $Stock; $Description;


if(isset($_GET['productId'])){
    $productId = $_GET['productId'];
    if (!$conn) {
         http_response_code(500);
    } else {
        $productId = $conn->real_escape_string($productId);
        $sql = "SELECT * FROM Products WHERE ProductId = '$productId'";
        $result = $conn->query($sql);
        if ($result->num_rows > 0) {
            while($row = $result->fetch_assoc()) {
                $Id = $row["ProductId"];
                $Name = $row["Name"];
                $Price = $row["Price"];
                $OS = $row["OS"];
                $CPU = $row["CPU"];
                $RAM = $row["RAM"];
                $GraphicsCard = $row["GraphicsCard"];
                $Storage = $row["Storage"];
                $Dimentions = $row["Dimentions"];
                $Image = $row["Image"];
                $Rating = $row["Rating"];
                $Stock = $row["Stock"];
                $Description = $row["Details"];
            }
        } else {
            echo "Product doesnt exist";
        }
    }
    $conn->close(); 
}
?>
<!DOCTYPE html>
<html lang="en">
<meta charset="UTF-8">
<title>Individual product page</title>
<meta name="viewport" content="width=device-width,initial-scale=1">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100&family=Sora:wght@100&display=swap" rel="stylesheet">
<link rel="stylesheet" href="../css/IndividualProductpage.css">
<style>
</style>
<script src=""></script>
<body>


    <!-- Toolbar navigation and SearchBar-->
    
    <div class="topnav">
        <div class="container">
             <img src="../ImgSrc/laptopialogo3.png" id="logo">  
        </div>
       
        <div class="loginBtn">
            <button>Login</button>
            <button id="signupBtn">Sign up </button>
        </div>

        <img src="img/cart.png" id="cart">
        
        <form action="/" method="GET" class="form">
        <input type="text" id="searchBar" placeholder="Looking for something?">
        </form>
        <div class="nav-pages">
            <a href="#home">Home</a>
            <a href="#products">Products</a>
            <a href="#about">About us</a>
            <a href="#contact">Contact Us</a>
        </div>
    </div>



     <!-- laptop title  -->
<div class="product_info">
 <h1 id="product_title"> <?php echo $Name ?> </h1>
 <div class="title-rate">

    <!-- Star ratings -->
    <input type="radio" id="star5" name="rate" value="5" />
    <label for="star5" title="text">
        <img src="img/star.png">
    </label>
    <input type="radio" id="star4" name="rate" value="4" />
    <label for="star4" title="text">
        <img src="img/star.png">
    </label>
    <input type="radio" id="star3" name="rate" value="3" />
    <label for="star3" title="text">
        <img src="img/star.png">
    </label>
    <input type="radio" id="star2" name="rate" value="2" />
    <label for="star2" title="text">
        <img src="img/star.png">
    </label>
    <input type="radio" id="star1" name="rate" value="1" />
    <label for="star1" title="text">
        <img src="img/star.png">
    </label>

  </div>

  <!-- Image of product -->
 <div class="product_image">
     <img id="productImage" src="<?php echo $Image?>" width="505" height="432">
     <img src="<?php echo $Image?>" width="50" height="43" onclick="document.querySelector('#productImage').src='<?php echo $Image?>'">
     <img src="<?php echo str_replace("1.jpg","2.jpg",$Image)?>" width="50" height="43" onclick="document.querySelector('#productImage').src='<?php echo str_replace("1.jpg","2.jpg",$Image)?>'">
     <img src="<?php echo str_replace("1.jpg","3.jpg",$Image)?>" width="50" height="43" onclick="document.querySelector('#productImage').src='<?php echo str_replace("1.jpg","3.jpg",$Image)?>'">
     <img src="<?php echo str_replace("1.jpg","4.jpg",$Image)?>" width="50" height="43" onclick="document.querySelector('#productImage').src='<?php echo str_replace("1.jpg","4.jpg",$Image)?>'">
 </div>
  
 <!-- Price  of laptop -->
<div class="product_price">
    <p id="stock"> IN STOCK(<?php echo $Stock?>)</p>
    <p id="price"> £<?php echo $Price?> </p>
 </div>
 

 <button type="button" id="basketBtn"> ADD TO BASKET </button>
 
 <!-- Laptop specifications -->
<div class="specs">
    <p> <?php echo $OS?> </p>
    <p> <?php echo $CPU?> </p>
    <p> <?php echo $RAM?> </p>
    <p> <?php echo $Storage?> </p>
    <p> <?php echo $GraphicsCard?> </p>
    <p> <?php echo $Dimentions?> </p>
</div>

<!-- product description -->
<div class="description">
    <p><?php echo $Description?></p>
</div>

</div>

<!-- Customer review section -->
<div class="cust_reviews">
    <div class="rate">
      <h2>Customer reviews</h2>
      <div class="stars">
        <input type="radio" id="star5" name="rate" value="5" />
        <label for="star5" title="text">
            <img src="img/star.png">
        </label>
        <input type="radio" id="star4" name="rate" value="4" />
        <label for="star4" title="text">
            <img src="img/star.png">
        </label>
        <input type="radio" id="star3" name="rate" value="3" />
        <label for="star3" title="text">
            <img src="img/star.png">
        </label>
        <input type="radio" id="star2" name="rate" value="2" />
        <label for="star2" title="text">
            <img src="img/star.png">
        </label>
        <input type="radio" id="star1" name="rate" value="1" />
        <label for="star1" title="text">
            <img src="img/star.png">
        </label>
        </div>
        <h2 id="review_no"> (5) </h2>
      </div>

      <p id="review"> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris </p>
</div>


</body>
</html>