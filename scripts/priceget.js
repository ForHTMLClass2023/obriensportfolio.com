var doge = document.getElementById("dogecoin");
var liveprice = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=dogecoin&vs_currencies=usd",
    "method": "GET",
    "headers": {}
}
$.ajax(liveprice).done(function (response){
    doge.innerHTML = response.dogecoin.usd;
});
