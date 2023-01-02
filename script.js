let weather={
    apikey:"a1a5537a28a81bfd599efeb71c7a06b5",
    fetchweather: function(city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q="+ city +"&units=metric&appid="+this.apikey
        ).then((response)=>response.json())
        .then((data)=>this.displayweather(data))
    },
    displayweather: function(data){
        const{name}=data;
        const{icon,description}=data.weather[0];
        const{temp,humidity}=data.main;
        const{speed}=data.wind;
        document.querySelector(".city").innerText="Weather in "+name;
        document.querySelector(".temp").innerText=temp+"°C";
        document.querySelector(".weather-image").src="http://openweathermap.org/img/wn/"+ icon +".png";
        document.querySelector(".w-type").innerText=description;
        document.querySelector(".humidity").innerText="Humidity:"+ humidity +"%";
        document.querySelector(".w-speed").innerText="Wind Speed:"+speed;
    },
    search:function(){
        this.fetchweather(document.querySelector(".search-box input").value);
    }
};
document.querySelector(".search-box button").addEventListener("click",()=>{
weather.search();
});
document.querySelector(".search-box").addEventListener("keyup",event=>{
    if(event.key == "Enter"){
    weather.search();
    }
});
