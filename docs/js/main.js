"use strict";var button=document.querySelector(".weather__button");button.addEventListener("click",function(t){t.preventDefault();var e="https://api.openweathermap.org/data/2.5/forecast?q="+document.querySelector(".weather__input").value+"&units=metric&APPID=a3d93545db37f2083123dd0518479e2a";fetch(e).then(function(t){if(200!==t.status)return console.log("we have a problem :), spróbuj później lub sprawdź czy wpisano nazwę miasta. Status:  "+t.status),void console.log("On IE doesnt work, I used fetch API to get data");t.json().then(function(t){if(console.log("On IE doesnt work, I used fetch API to get data"),""!==t){var e=t.list[0].dt_txt.slice(0,10),n=t.city.name,o=t.list[0].weather[0].description,c=t.list[0].main.temp,i=t.list[0].wind.speed,r="http://openweathermap.org/img/w/"+t.list[0].weather[0].icon+".png",s='<img src="'+r+'">';document.querySelector(".city__date-plus0").textContent=e,document.querySelector(".city__name-plus0").textContent=n,document.querySelector(".city__weather-plus0").textContent=o,document.querySelector(".city__temp-plus0").textContent=c+" C",document.querySelector(".city__wind-plus0").textContent="Wind: "+i+" m/s",document.querySelector(".city__icon-plus0").innerHTML=s;var u=t.list[8].dt_txt.slice(0,10),l=t.city.name,a=t.list[8].weather[0].description,y=t.list[8].main.temp,d=t.list[8].wind.speed,m=t.list[8].weather[0].icon,p='<img src="'+("http://openweathermap.org/img/w/"+m+".png")+'">';document.querySelector(".city__date-plus1Day").textContent=u,document.querySelector(".city__name-plus1Day").textContent=l,document.querySelector(".city__weather-plus1Day").textContent=a,document.querySelector(".city__temp-plus1Day").textContent=y+" C",document.querySelector(".city__wind-plus1Day").textContent="Wind: "+d+" m/s",document.querySelector(".city__icon-plus1Day").innerHTML=p;var _=t.list[16].dt_txt.slice(0,10),w=t.city.name,h=t.list[16].weather[0].description,q=t.list[16].main.temp,S=t.list[16].wind.speed,x='<img src="'+("http://openweathermap.org/img/w/"+t.list[16].weather[0].icon+".png")+'">';document.querySelector(".city__date-plus2Days").textContent=_,document.querySelector(".city__name-plus2Days").textContent=w,document.querySelector(".city__weather-plus2Days").textContent=h,document.querySelector(".city__temp-plus2Days").textContent=q+" C",document.querySelector(".city__wind-plus2Days").textContent="Wind: "+S+" m/s",document.querySelector(".city__icon-plus2Days").innerHTML=x;var C=t.list[24].dt_txt.slice(0,10),D=t.city.name,g=t.list[24].weather[0].description,v=t.list[24].main.temp,f=t.list[24].wind.speed,b=(t.list[24].weather[0].icon,'<img src="'+("http://openweathermap.org/img/w/"+m+".png")+'">');document.querySelector(".city__date-plus3Days").textContent=C,document.querySelector(".city__name-plus3Days").textContent=D,document.querySelector(".city__weather-plus3Days").textContent=g,document.querySelector(".city__temp-plus3Days").textContent=v+" C",document.querySelector(".city__wind-plus3Days").textContent="Wind: "+f+" m/s",document.querySelector(".city__icon-plus3Days").innerHTML=b;var I=t.list[32].dt_txt.slice(0,10),L=t.city.name,H=t.list[32].weather[0].description,M=t.list[32].main.temp,T=t.list[32].wind.speed,W=(t.list[32].weather[0].icon,'<img src="'+r+'">');document.querySelector(".city__date-plus4Days").textContent=I,document.querySelector(".city__name-plus4Days").textContent=L,document.querySelector(".city__weather-plus4Days").textContent=H,document.querySelector(".city__temp-plus4Days").textContent=M+" C",document.querySelector(".city__wind-plus4Days").textContent="Wind: "+T+" m/s",document.querySelector(".city__icon-plus4Days").innerHTML=W;for(var k=document.querySelectorAll(".weather__box"),A=0;A<k.length;A++)k[A].style.display="block"}else console.log("Błąd")})})});