async function weather(city){
    var weather_key="5c7268acb8714893873190329260310"
    var location=city
    var weather_url= `http://api.weatherapi.com/v1/current.json?key=${weather_key}&q=${location}`
    // console.log(weather_url)
    var response=await fetch(weather_url)
    var data=await response.json()
    document.querySelectorAll("#temp img")[0].setAttribute("src", "http:"+data.current.condition.icon)
    document.querySelector('#temp h2').innerHTML=data.current.temp_c+ "&deg;C"
    document.querySelector('#temp h3').innerHTML=data.location.name
 
}
weather("cairo")



  
