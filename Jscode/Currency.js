async function currency(Currency_base,Currency_target,amount){
    var currency_key="f925a03fa4e84d1fba07081b"
    
    var currency_url=` https://v6.exchangerate-api.com/v6/${currency_key}/pair/${Currency_base}/${Currency_target}/${amount}`

    console.log(currency_url)

    var response= await fetch(currency_url)
    var data=await response.json()
    console.log(data)


    var currency_div=document.createElement("div")
    var currency_content=`
    <h5>Currency_base : ${data.base_code}</h5>
    <h5>Currency_target : ${data.target_code}</h5>
    <h5>Currency_amount : ${amount}</h5>
    <h5>Currency_RESULTS : ${data.conversion_result}</h5>

    `
    currency_div.innerHTML=currency_content
    document.getElementById("currency").appendChild(currency_div)



/******************************************************/

document.getElementById("results").innerHTML=data.conversion_result

}

var fromCurrency=document.getElementById("fromm").value
var toCurrency=document.getElementById("too").value
var amountCurrency=document.getElementById("amount").value

currency(fromCurrency,toCurrency,amountCurrency);