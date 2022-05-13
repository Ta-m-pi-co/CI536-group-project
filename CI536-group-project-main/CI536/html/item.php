<?php
$conn = mysqli_connect('localhost', 'cw1019_admin', '0B+F4pp_~u{p', 'cw1019_laptopia_database');
$Id; $Name; $Price; $OS; $CPU; $RAM; $GraphicsCard; $Storage; $Dimensions; $Image; $Rating; $Stock; $Description;


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
                $Dimensions = $row["Dimensions"];
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
<!-- Created By Code4Education -->
<html lang="en" dir="ltr">
<head>
  <meta charset="utf-8">
  <title>Laptopia</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="../css/index.css">
  <link rel="stylesheet" href="../css/item.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <script src="../javascript/navbar.js"></script>
  <script src="../javascript/index.js"></script>
  <script src="../javascript/item.js"></script>
  <script src="https://kit.fontawesome.com/af7a93ff0b.js" crossorigin="anonymous"></script>
</head>
<body>
  <nav class="navbar">
    <div class="menu-icon">
      <i class="fa fa-bars"></i>
    </div>
    <div class="logo"><a class="logo" href="index.html"><img id="imgLogo" src="../ImgSrc/laptopialogo3.png" alt="Laptopia Logo"></img></a></div>
    <div class="nav-items">
      <ul> 
        <li><a href="index.html">Home</a></li>
        <li><a href="product.html">Product</a></li>
        <li><a href="contact.html">Contact</a></li>
        <li><a href="basket.html">Basket</a></li>
        <li><a href="loginsignup.php" id="logSign"  aria-hidden="true">login/sign up</a></li>
      </ul>
    </div>
    
    <div class="search-icon">
      <i class="fa fa-search"></i>
    </div>
    <div class="cancel-icon">
      <i class="fa fa-times"></i>
    </div>
    <form action="#">
      <input type="search" class="search-data" placeholder="Search" required>
      <button type="submit" class="fa fa-search"></button>
    </form>
  </nav>

  <div class="header">
    <h3 id="product_title"><?php echo $Name ?></h3>
      <!-- Star ratings -->
      <span class="<?php if ($Rating < 1){echo "fa fa-star";}else{echo "fa fa-star checked";}?>"></span>
      <span class="<?php if ($Rating < 20){echo "fa fa-star";}else{echo "fa fa-star checked";}?>"></span>
      <span class="<?php if ($Rating < 40){echo "fa fa-star";}else{echo "fa fa-star checked";}?>"></span>
      <span class="<?php if ($Rating < 60){echo "fa fa-star";}else{echo "fa fa-star checked";}?>"></span>
      <span class="<?php if ($Rating < 80){echo "fa fa-star";}else{echo "fa fa-star checked";}?>"></span>
    </div>
  </div>
  
  <div class="row">
    <div class="column smallside" style="background-color: rgb(15, 14, 26)"></div>
    <div class="column middle" style="background-color: rgb(54, 54, 54)">
      <div class="product_image">
        <img id="productImage" src="<?php echo $Image?>">
          <div class="row selectimages">
            <div class="column side"><img src="<?php echo $Image?>" onclick="document.querySelector('#productImage').src='<?php echo $Image?>'"></div>
            <div class="column side"><img src="<?php echo str_replace("1.jpg","2.jpg",$Image)?>" onclick="document.querySelector('#productImage').src='<?php echo str_replace("1.jpg","2.jpg",$Image)?>'"></div>
            <div class="column side"><img src="<?php echo str_replace("1.jpg","3.jpg",$Image)?>" onclick="document.querySelector('#productImage').src='<?php echo str_replace("1.jpg","3.jpg",$Image)?>'"></div>
            <div class="column side"><img src="<?php echo str_replace("1.jpg","4.jpg",$Image)?>" onclick="document.querySelector('#productImage').src='<?php echo str_replace("1.jpg","4.jpg",$Image)?>'"></div>
          </div>
        </div>
      </div>
    <div class="column large" style="background-color: rgb(27, 27, 27)">
      <div class="details-sidebar">
        <p id="stock">IN STOCK (<?php echo $Stock?>)</p>
        <p id="price">£<?php echo $Price ?></p>
        <!-- Laptop specifications -->
        <ul id="specs">
            <li> <?php echo $OS ?> </li>
            <li> <?php echo $CPU ?> </li>
            <li> <?php echo $RAM ?> </li>
            <li> <?php echo $Storage ?> </li>
            <li> <?php echo $GraphicsCard ?> </li>
            <li> <?php echo $Dimensions ?> </li>
        </ul>
        <button type="button" id="basketBtn" onclick="addComma(); setCookie('basket', getCookie('basket').substring(0,getCookie('basket').length-2)+'&quot;id&quot;:<?php echo $Id ?>}]', 1);"> ADD TO BASKET </button>
      </div>
    </div>
    <div class="column smallside""></div>
  </div>
  <div class="row">
    <!-- product description -->
    <div class="column smallside" ></div>
    <div class="column middle" id="descAndReviews">
    <div class="description">
        <p><?php echo $Description ?></p>
      </div>
      <div class="description" id="lareview">
        <br>
        <p>Leave a Review?</p>
        <span id="star1" class="rating__star fa fa-star"></span>
        <span id="star2" class="rating__star fa fa-star"></span>
        <span id="star3" class="rating__star fa fa-star"></span>
        <span id="star4" class="rating__star fa fa-star"></span>
        <span id="star5" class="rating__star fa fa-star"></span>
        <span id="users-product-rating" style="display: none;">0</span>
        <br><br><textarea id="reviewText" style="width: -webkit-fill-available;height: 120px;"></textarea>
      </div>
      <div class="description" id="reviews" style="display:none;">
        <br>
        <p>Reviews</p>
      </div>
    </div>
    <div class="column smallside"></div>
  </div>
  <div class="footer">
    <p style="height:100%"></p>
  </div>
  <script>
  function getCookie(cname) {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for(let i = 0; i <ca.length; i++) {
          let c = ca[i];
          while (c.charAt(0) == ' ') {
            c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
          }
        }
        return "";
    }

    function setCookie(cname, cvalue, exdays) {
        const d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        let expires = "expires="+ d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }
    
    if(getCookie("basket")==""){setCookie("basket","[{}]",1)}
    
    function addComma(){
        if(getCookie("basket")!="[{}]"){setCookie("basket",getCookie('basket').substring(0,getCookie('basket').length-1)+",{}]",1)}
    }
  </script>
</body>
</html>