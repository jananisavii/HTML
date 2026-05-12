let inputCity= document.querySelector("input");
let serachBtn= document.querySelector("button");
let outputDiv= document.querySelector("#output");

serachBtn.addEventListener("click",async (event)=>{

    outputDiv.innerHTML="";
    let apikey="5d3d8b9155b6f628d2644383f0633e1f";
    let response= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputCity.value}&appid=${apikey}`)

    let data= await response.json(); 
    console.log(data);
  
    if(response.status===200)
    {

       let cityName= document.createElement("h3");
       cityName.innerHTML= `City name: ${data.name}`;

       let temperature=document.createElement("h3");
       temperature.innerHTML=`Temparature:${Math.round(data.main.temp-273)} °C` //parseInt

      let windspeed= document.createElement("h3");
      windspeed.innerHTML= `Wind Speed: ${data.wind.speed} km/hr`

      let climate= document.createElement("h3");
      climate.innerHTML=`Climate: ${data.weather[0].main}`;

        outputDiv.append(cityName,temperature,windspeed,climate);

     }
    else if(response.status==404)
    {
      let notFound= document.createElement("h3");
      notFound.innerHTML="CITY NOT FOUND!!!!!"
      outputDiv.append(notFound);
    }
})
