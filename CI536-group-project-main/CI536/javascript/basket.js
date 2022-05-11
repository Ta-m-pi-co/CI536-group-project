window.addEventListener('load', function(evt){
    
    if (getCookie('username')===null){
        window.location.href = "https://cw1019.brighton.domains/Laptopia/html/loginsignup.php";
    }

    var arr = JSON.parse(getCookie("basket")),
    basketItems = document.querySelector("#basket-items-results"),
    subtotal = document.querySelector("#subtotal"),
    shipping = document.querySelector("#shipping"),
    totalFloat = 0,
    shippingFloat = 14.99,
    total = document.querySelector("#total"),
    payBtn = document.querySelector("#make-payment"),
    firstItem = 0;
    console.log("COOKIE " + getCookie("basket"))

    if (getCookie("basket")===null||getCookie("basket")==='[{}]'){
        document.querySelector("#checkout-error").style.display="block";
        document.querySelector(".payment").style.display="none";
        document.querySelector(".basket-items").style.marginRight="10%";
    }else{
        var tempcounter = 0;             
        displayLoop();            
    }
    
    payBtn.addEventListener("click", placeOrder);
    
    function displayLoop() {      
        setTimeout(function() {   
            searchfor(arr[tempcounter].id);
            tempcounter++;                
            if (tempcounter < arr.length) {       
                displayLoop();  
            }                  
        }, 100)
    }

    function searchfor(id) {
        var xhttp = new XMLHttpRequest();
        
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                
               txt = xhttp.responseText;
               returnedjson = JSON.parse(txt),
               totalHits = Object.keys(returnedjson).length;

		if (totalHits === 0){
                    var searchResult = document.createElement("h3");
                        basketItems.appendChild(searchResult);
		}else{

			returnedjson.forEach(function(item){ //for every item retrived
    
                        console.log(item.ProductId);
                        console.log(item.Name);
                        console.log(item.Price);
                        console.log(item.Image);
                        
			            searchResult = document.createElement("div");
                        searchResult.setAttribute("class", "col-sm-9 section");
                        basketItems.appendChild(searchResult);
                    
                        searchResultCard = document.createElement("div");
                        searchResultCard.setAttribute("class", "card");
                        searchResult.appendChild(searchResultCard);
                    
                        nameGot = document.createElement("div"); //create the images, titles and etc from retrived info
                        nameGot.setAttribute("class", "card-header");
                        nameGot.textContent = item.Name;
                        searchResultCard.appendChild(nameGot);
                    
                        var imgSection = document.createElement("div");
                        imgSection.setAttribute("class", "col-sm-3");
                        searchResultCard.appendChild(imgSection);
                    
                        var btnSection = document.createElement("div");
                        btnSection.setAttribute("class", "col-sm-3");
                        searchResultCard.appendChild(btnSection);
                    
                        var imageGot = document.createElement("IMG"); 
                        imageGot.setAttribute("class", "card-img-top");
                        imageGot.setAttribute("alt", item.Name);
                        imageGot.setAttribute("src", item.Image);
                        imgSection.appendChild(imageGot);

                        var price = document.createElement("p");
                        price.setAttribute("class", "card-header");
                        price.textContent = "Price: £" + item.Price;
                        totalFloat = totalFloat + parseFloat(item.Price);
                        btnSection.appendChild(price);
                        
                        var viewProduct = document.createElement("a");
                        viewProduct.setAttribute("href", "https://cw1019.brighton.domains/Laptopia/html/item.php?productId="+item.ProductId);
                        viewProduct.setAttribute("class", "btn1");
                        viewProduct.textContent = "View Product";
                        btnSection.appendChild(viewProduct);
                        
                        var RemoveFromBasket = document.createElement("a");
                        RemoveFromBasket.setAttribute("href", "#");
                        if (firstItem === 0){
                            RemoveFromBasket.setAttribute("onclick", "removeFromBasket("+item.ProductId+",true);");
                            firstItem = 1;
                        }else{
                            RemoveFromBasket.setAttribute("onclick", "removeFromBasket("+item.ProductId+",false);");
                        }
                        RemoveFromBasket.setAttribute("class", "btn2");
                        RemoveFromBasket.textContent = "Remove from Basket";
                        btnSection.appendChild(RemoveFromBasket);
			        })
			        subtotal.innerHTML = "Subtotal: £"+totalFloat.toFixed(2);
			        shipping.innerHTML = "Shipping: £"+shippingFloat;
			        total.innerHTML = "Total: £"+((totalFloat+shippingFloat).toFixed(2));
		        }
            }
        }
        xhttp.open("GET", "https://cw1019.brighton.domains/Laptopia/html/productsearch.php?searchById="+id, true);
        xhttp.send();
    }
    
    function placeOrder() {
        let name = document.querySelector("#nameOnCard").value;
        
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 201) {
              document.querySelector('#confirmation-notification').style.display = 'block';
              var orderNumberReceipt = document.createElement("p");
              orderNumberReceipt.textContent = "Your Order Reference Number is "+xhttp.responseText;
              document.querySelector('#confirmation-notification').appendChild(orderNumberReceipt);
              document.cookie = "basket=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            }
        };
        xhttp.open("POST", "https://cw1019.brighton.domains/Laptopia/html/createorder.php", true);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send("name="+name+"&price="+total.textContent.replace("Total: £", ""));
    }

    function setCookie(cname, cvalue, exdays) {
        const d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        let expires = "expires="+ d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

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
        return null;
    }
})