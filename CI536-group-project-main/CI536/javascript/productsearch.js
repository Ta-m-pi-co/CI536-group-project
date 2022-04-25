window.addEventListener('load', function(evt){
    searchBtn = document.querySelector('#searchBtn')
    searchBar = document.querySelector('#searchBar')
    var index = 0;
    //searchfor("", index);
    
    searchBtn.addEventListener("click", function(evt){
        evt.preventDefault();
        var index = 0;
        searchfor(searchBar.value, index)
    })
})

function next() { 
    index = index + 10
    searchfor(searchBar.value, index)
}
function previous() { 
    if(index !== 0){index = index + 10}
    searchfor(searchBar.value, index)
}

function searchfor(searchterm, index) {
    var xhttp = new XMLHttpRequest(),
    searchResults = document.querySelector('#searchResults');
    
    
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            
           searchResults.innerHTML = "";
           txt = xhttp.responseText;
           returnedjson = JSON.parse(txt),
           totalHits = returnedjson.total_hits;
           
            if (totalHits === 0){
               //display nothing here and del old results
            }else{

                var maxResult
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
                
                }
            }
        }
    };
    xhttp.open("GET", "https://cw1019.brighton.domains/Laptopia/html/productsearch.php?searchByAny="+searchterm, true);
    xhttp.send();
}
