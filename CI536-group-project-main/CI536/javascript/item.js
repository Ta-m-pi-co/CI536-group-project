window.addEventListener('load', function(evt){

    const ratingStars = [...document.getElementsByClassName("rating__star")];
    const overallRating = document.querySelector('#users-product-rating');

    function executeRating(stars) {
      const starClassActive = "rating__star fa fa-star checked";
      const starClassInactive = "rating__star fa fa-star";
      const starsLength = stars.length;
      let i;
      stars.map((star) => {
        star.onclick = () => {
          i = stars.indexOf(star);
          let x;

          if (star.className===starClassInactive) {
            x = 0;
            for (i; i >= 0; --i) {stars[i].className = starClassActive;x=x+20;}
          } else {
            x = 100;
            for (i; i < starsLength; ++i) {stars[i].className = starClassInactive;x=x-20;}
          }
          overallRating.textContent=x;
        };
      });
    }
    executeRating(ratingStars);

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

    function postComment() {
        let name = getCookie('username');
        let rating = document.querySelector('#users-product-rating').textContent;
        let comment = document.querySelector('#reviewText').value;
        
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 201) {
              console.log(xhttp.responseText);
            }
        };
        xhttp.open("POST", "https://cw1019.brighton.domains/Laptopia/html/freddiescode.php", true);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send("name="+name+"&rating="+rating+"&comment="+comment);
    }

})