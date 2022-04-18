window.addEventListener('load', function(evt){
    contactAPI();
})

function contactAPI() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    myHeaders.append("Cookie", "NOTEBSESSID=cr1ht6o1sqd5ph34n74jlkbk96");
    
    var urlencoded = new URLSearchParams();
    urlencoded.append("apikey", "112233aabbcc");
    urlencoded.append("method", "get_model_info");
    urlencoded.append("param[model_id]", "538");
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: urlencoded,
      redirect: 'follow'
    };
    
    fetch("https://noteb.com/api/webservice.php", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
}