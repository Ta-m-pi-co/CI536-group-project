window.addEventListener('load', function(evt){

  const ratingStars = [...document.getElementsByClassName("rating__star")];
  const overallRating = document.querySelector('#users-product-rating');
  const reviewSection = document.querySelector('#reviews');
  
  var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        let returnedjson = JSON.parse(this.responseText);
        
        returnedjson.forEach(function(item){
            
          let username = item.username
          let date = item.date
          let content = item.content
          let rating = item.rating
          
          searchResultCard = document.createElement("div");
          searchResultCard.setAttribute("class", "card");
          searchResultCard.setAttribute("style", "margin:6px;font-size:85%;");
          reviewSection.appendChild(searchResultCard);
            
          nameGot = document.createElement("h3");
          nameGot.textContent = username + " " + date;
          searchResultCard.appendChild(nameGot);
          
          for (let i = 0; i < (rating/20); i++) {
          var stars = document.createElement("i");
          stars.setAttribute("class", "fa fa-star checked");
          stars.setAttribute("style", "margin-top:10px;margin-bottom:10px;");
          stars.setAttribute("aria-hidden","true");
          searchResultCard.appendChild(stars);
          }
          
          reviewGot = document.createElement("p");
          reviewGot.textContent = content;
          searchResultCard.appendChild(reviewGot);
            
          reviewSection.style.display = "block";
        })
        
      }
    };
  xhttp.open("GET", "https://cw1019.brighton.domains/Laptopia/html/reviews.php?productId="+document.querySelector('#the-product-id').textContent, true);
  xhttp.send();
  
  document.querySelector('#submit-review').addEventListener("click", postComment);

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

  function postComment() {
      console.log("button clicked");
      let rating = document.querySelector('#users-product-rating').textContent;
      let content = document.querySelector('#reviewText').value;
      let productId = document.querySelector('#the-product-id').textContent;
      
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 201) {
            location.reload();
          }
      };
      xhttp.open("POST", "https://cw1019.brighton.domains/Laptopia/html/reviews.php", true);
      xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      xhttp.send("productId="+productId+"&rating="+rating+"&content="+content);
  }

})