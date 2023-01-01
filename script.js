let weather={
    apikey:"a1a5537a28a81bfd599efeb71c7a06b5",
    fetchweather: function(city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid="+apikey
        ).then((response)=>response.json())
        .then((data)=>displayweather(data))
    },
    displayweather:function(data){
     const{name}=data;
     const{icon,description}=data.weather[0];
     const{humidity}=data.main;
     const{speed}=data.wind;
    }
};