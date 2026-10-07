var fromCurrency=document.getElementById("fromm").value
var toCurrency=document.getElementById("too").value
var amountCurrency=document.getElementById("amount").value
var convertcurrency=document.getElementById("btn_form")


convertcurrency.addEventListener('click',

async function currency(){
    var currency_key="f925a03fa4e84d1fba07081b"
    
    var currency_url=` https://v6.exchangerate-api.com/v6/${currency_key}/pair/${fromCurrency}/${toCurrency}/${amountCurrency}`

    console.log(currency_url)

    var response= await fetch(currency_url)
    var data=await response.json()
    

    var rate=data.conversion_rate
    var converteamount=amountCurrency*rate

    document.getElementById("results").innerHTML=converteamount
}   
)



