window.addEventListener('load', function(evt){
    contactAPI();
})

function contactAPI() {
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "https://reqbin.com/echo/post/json");
    xhr.setRequestHeader("Accept", "application/json");
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        console.log(xhr.status);
        console.log(xhr.responseText);
    }};

    let data = `{
    "Id": 78912,
    "Customer": "Jason Sweet",
    "Quantity": 1,
    "Price": 18.00
    }`;

    xhr.send(data);
}