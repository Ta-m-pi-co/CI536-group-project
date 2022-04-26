window.addEventListener('load', function(evt){
    searchBtn = document.querySelector('#searchBtn');
    searchBar = document.querySelector('#searchBar');
    var index = 0,
    totalHits,
    searchingFor = "";

    searchfor("", index);
    
    searchBtn.addEventListener("click", function(evt){
        evt.preventDefault();
        var index = 0;
        searchingFor = searchBar.value
        searchfor(searchingFor, index);
    })
    
    prevBtn.addEventListener("click", function(evt){
        evt.preventDefault();
        previous();
    })
    
    nextBtn.addEventListener("click", function(evt){
        evt.preventDefault();
        next();
    })
    
    function next() { 
        console.log("total hits " + totalHits)
        console.log("index " + index)
        if(totalHits > index+10){
            index = index + 10;
            searchfor(searchingFor, index);
        }
        console.log("next clicked");
    }
    function previous() { 
        if(index > 9){
            index = index - 10;
            searchfor(searchingFor, index);
        }
        console.log("prev clicked");
    }

    function getFilters(){
        var filters = "";
        if (document.querySelector("#price1").checked === true){filters += "&filter400=%20OR%20Price%20BETWEEN%200%20AND%20400%20"}
        if (document.querySelector("#price2").checked === true){filters += "&filter800=%20OR%20Price%20BETWEEN%20400%20AND%20800%20"}
        if (document.querySelector("#price3").checked === true){filters += "&filter1200=%20OR%20Price%20BETWEEN%20800%20AND%201200%20"}
        return filters;
    }
    
    function searchfor(searchterm, index) {
        var xhttp = new XMLHttpRequest(),
        searchResults = document.querySelector('#searchResults');
        console.log("index "+index);
        
        
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                
               searchResults.innerHTML = "";
               txt = xhttp.responseText;
               returnedjson = JSON.parse(txt),
               totalHits = Object.keys(returnedjson).length;
               
                if (totalHits === 0){
                   var searchResult = document.createElement("div");
                        searchResult.setAttribute("class", "col-sm-9 section");
                        searchResults.appendChild(searchResult);
                    
                        var searchResultCard = document.createElement("div");
                        searchResultCard.setAttribute("class", "card");
                        searchResult.appendChild(searchResultCard);
                    
                        var nameGot = document.createElement("div"); 
                        nameGot.setAttribute("class", "card-header");
                        nameGot.textContent = "Nothing here but Bugs";
                        searchResultCard.appendChild(nameGot);
                }else{
    
                    var maxResult
                    console.log("total hits " + totalHits)
                    console.log("index 10 " + index+10)
                    if (index+10 > totalHits){
                        maxResult = totalHits
                    } else {
                        maxResult = index+10
                    }
    
                    for (let i = index; i < maxResult; i++) {
                    
                        var item = returnedjson[i];
    
                        console.log(item.ProductId)
                        console.log(item.Name)
                        console.log(item.Price)
                        console.log(item.OS)
                        console.log(item.CPU)
                        console.log(item.RAM)
                        console.log(item.GraphicsCard)
                        console.log(item.Storage)
                        console.log(item.Dimensions)
                        console.log(item.Image)
                        console.log(item.Rating)
                        console.log(item.Stock)
                    
                        var rating = item.Rating,
                        numostars = 0;
                        console.log(rating);
                    
                        switch (true) {
                            case (rating < 20):
                                numostars = 1;
                                break;
                            case (rating < 40):
                                numostars = 2;
                                break;
                            case (rating < 60):
                                numostars = 3;
                                break;
                            case (rating < 80):
                                numostars = 4;
                                break;
                            case (rating < 100):
                                numostars = 5;
                                break;
                            default:
                                break;
                        }
                    
                        var searchResult = document.createElement("div");
                        searchResult.setAttribute("class", "col-sm-9 section");
                        searchResults.appendChild(searchResult);
                    
                        var searchResultCard = document.createElement("div");
                        searchResultCard.setAttribute("class", "card");
                        searchResult.appendChild(searchResultCard);
                    
                        var nameGot = document.createElement("div"); //create the images, titles and etc from retrived info
                        nameGot.setAttribute("class", "card-header");
                        nameGot.textContent = item.Name;
                        searchResultCard.appendChild(nameGot);
                    
                        var imgSection = document.createElement("div");
                        imgSection.setAttribute("class", "col-sm-3");
                        searchResultCard.appendChild(imgSection);
                    
                        var descSection = document.createElement("div");
                        descSection.setAttribute("class", "col-sm-6");
                        searchResultCard.appendChild(descSection);
                    
                        var btnSection = document.createElement("div");
                        btnSection.setAttribute("class", "col-sm-3");
                        searchResultCard.appendChild(btnSection);
                    
                        var imageGot = document.createElement("IMG"); 
                        imageGot.setAttribute("class", "card-img-top");
                        imageGot.setAttribute("alt", item.Name);
                        imageGot.setAttribute("src", item.Image);
                        imgSection.appendChild(imageGot);
                    
                        var starContainer = document.createElement("div");
                        starContainer.setAttribute("class", "card-body");
                        descSection.appendChild(starContainer);
                    
                        var starContainerInner = document.createElement("div");
                        starContainerInner.setAttribute("class", "ratings mr-2");
                        starContainer.appendChild(starContainerInner);
                    
                        for (let i = 0; i < numostars; i++) {
                        var stars = document.createElement("i");
                        stars.setAttribute("class", "fa fa-star");
                        stars.setAttribute("aria-hidden","true");
                        starContainerInner.appendChild(stars);
                        }
                        
                        var details = document.createElement("ul");
                        details.setAttribute("class", "card-text");
                        descSection.appendChild(details);
                        
                        var OS = document.createElement("li");
                        OS.textContent = item.OS;
                        details.appendChild(OS);
                        var CPU = document.createElement("li");
                        CPU.textContent = item.CPU;
                        details.appendChild(CPU);
                        var GraphicsCard = document.createElement("li");
                        GraphicsCard.textContent = item.GraphicsCard;
                        details.appendChild(GraphicsCard);
                        var RAM = document.createElement("li");
                        RAM.textContent = item.RAM;
                        details.appendChild(RAM);
                        var Storage = document.createElement("li");
                        Storage.textContent = item.Storage;
                        details.appendChild(Storage);
                        var Dimensions = document.createElement("li");
                        Dimensions.textContent = item.Dimensions;
                        details.appendChild(Dimensions);
                        
                        var price = document.createElement("h4");
                        price.setAttribute("class", "price");
                        price.textContent = "Price: £" + item.Price;
                        btnSection.appendChild(price);
                        
                        var viewProduct = document.createElement("a");
                        viewProduct.setAttribute("href", "https://cw1019.brighton.domains/Laptopia/html/item.php?productId="+item.ProductId);
                        viewProduct.setAttribute("class", "btn1");
                        viewProduct.textContent = "View Product";
                        btnSection.appendChild(viewProduct);
                        
                        var viewProduct = document.createElement("a");
                        viewProduct.setAttribute("href", "https://www.youtube.com/watch?v=dQw4w9WgXcQ");
                        viewProduct.setAttribute("class", "btn2");
                        viewProduct.textContent = "Add to Basket";
                        btnSection.appendChild(viewProduct);
                    
                        console.log("https://cw1019.brighton.domains/Laptopia/html/productsearch.php?searchByAny="+searchterm+getFilters());
                    }
                }
            }
        };
        xhttp.open("GET", "https://cw1019.brighton.domains/Laptopia/html/productsearch.php?searchByAny="+searchterm+getFilters(), true);
        xhttp.send();
    }

})