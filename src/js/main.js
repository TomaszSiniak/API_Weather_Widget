const button = document.querySelector('.weather__button');


button.addEventListener('click', (e) => {
    e.preventDefault();

    const city = document.querySelector('.weather__input').value;
    const API_KEY = 'a3d93545db37f2083123dd0518479e2a';
    const url = 'http://api.openweathermap.org/data/2.5/forecast?q=' + city + '&units=metric&APPID=' + API_KEY;

    //    IE DOESNT SUPPORT fetch - I just wanted to train fetch methodology;


    fetch(url)
        .then(data => {
            if (data.status !== 200) {
                console.log('we have a problem :), spróbuj później lub sprawdź czy wpisano nazwę miasta. Status:  ' + data.status);
                return;
            }
            data.json().then(city => {
                console.log('On IE 11 doesnt work, I used fetch API to get data')

                if (city !== '') {

                    // current day - getting data from json object
                    const cityDateTime = city.list[0].dt_txt; // zwraca nam datę i czas , my potrzebujemy tylko datę więc ucinamy striga metodą slice

                    const cityDate = cityDateTime.slice(0, 10);
                    const cityName = city.city.name;
                    const cityDes = city.list[0].weather[0].description;
                    const cityTemp = city.list[0].main.temp;
                    const cityWind = city.list[0].wind.speed;
                    const cityIconId = city.list[0].weather[0].icon;

                    // Ajax picture loading
                    const cityIconSrc = ('http://openweathermap.org/img/w/' + cityIconId + '.png');
                    const cityIcon = '<img src="' + cityIconSrc + '">';

                    // assigned variables to html class and display it


                    const cityDateIn = document.querySelector('.city__date-plus0');
                    cityDateIn.textContent = cityDate;

                    const cityNameIn = document.querySelector('.city__name-plus0');
                    cityNameIn.textContent = cityName;

                    const cityWeatherIn = document.querySelector('.city__weather-plus0');
                    cityWeatherIn.textContent = cityDes;

                    const cityTempIn = document.querySelector('.city__temp-plus0');
                    cityTempIn.textContent = cityTemp + ' C';

                    const cityWindIn = document.querySelector('.city__wind-plus0');
                    cityWindIn.textContent = 'Wind: ' + cityWind + ' m/s';

                    const cityIconIn = document.querySelector('.city__icon-plus0');
                    cityIconIn.innerHTML = cityIcon;


                    // plus 1 day
                    const cityDateTimePlus1Day = city.list[8].dt_txt;

                    const cityDatePlus1Day = cityDateTimePlus1Day.slice(0, 10);
                    const cityNamePlus1Day = city.city.name;
                    const cityDesPlus1Day = city.list[8].weather[0].description;
                    const cityTempPlus1Day = city.list[8].main.temp;
                    const cityWindPlus1Day = city.list[8].wind.speed;
                    const cityIconIdPlus1Day = city.list[8].weather[0].icon;

                    const cityIconSrcPlus1Day = ('http://openweathermap.org/img/w/' + cityIconIdPlus1Day + '.png');
                    const cityIconPlus1Day = '<img src="' + cityIconSrcPlus1Day + '">';

                    const cityDate1In = document.querySelector('.city__date-plus1Day');
                    cityDate1In.textContent = cityDatePlus1Day;

                    const cityName1In = document.querySelector('.city__name-plus1Day');
                    cityName1In.textContent = cityNamePlus1Day;

                    const cityWeather1In = document.querySelector('.city__weather-plus1Day');
                    cityWeather1In.textContent = cityDesPlus1Day;

                    const cityTemp1In = document.querySelector('.city__temp-plus1Day');
                    cityTemp1In.textContent = cityTempPlus1Day + ' C';

                    const cityWind1In = document.querySelector('.city__wind-plus1Day');
                    cityWind1In.textContent = 'Wind: ' + cityWindPlus1Day + ' m/s';

                    const cityIcon1In = document.querySelector('.city__icon-plus1Day');
                    cityIcon1In.innerHTML = cityIconPlus1Day;


                    // plus 2 days
                    const cityDateTimePlus2Days = city.list[16].dt_txt;
                    const cityDatePlus2Days = cityDateTimePlus2Days.slice(0, 10);
                    const cityNamePlus2Days = city.city.name;
                    const cityDesPlus2Days = city.list[16].weather[0].description;
                    const cityTempPlus2Days = city.list[16].main.temp;
                    const cityWindPlus2Days = city.list[16].wind.speed;
                    const cityIconIdPlus2Days = city.list[16].weather[0].icon;
                    const cityIconSrcPlus2Days = ('http://openweathermap.org/img/w/' + cityIconIdPlus2Days + '.png');
                    const cityIconPlus2Days = '<img src="' + cityIconSrcPlus2Days + '">';



                    const cityDate2In = document.querySelector('.city__date-plus2Days');
                    cityDate2In.textContent = cityDatePlus2Days;

                    const cityName2In = document.querySelector('.city__name-plus2Days');
                    cityName2In.textContent = cityNamePlus2Days;

                    const cityWeather2In = document.querySelector('.city__weather-plus2Days');
                    cityWeather2In.textContent = cityDesPlus2Days;

                    const cityTemp2In = document.querySelector('.city__temp-plus2Days');
                    cityTemp2In.textContent = cityTempPlus2Days + ' C';

                    const cityWind2In = document.querySelector('.city__wind-plus2Days');
                    cityWind2In.textContent = 'Wind: ' + cityWindPlus2Days + ' m/s';

                    const cityIcon2In = document.querySelector('.city__icon-plus2Days');
                    cityIcon2In.innerHTML = cityIconPlus2Days;


                    // plus 3 days
                    const cityDateTimeplus3Days = city.list[24].dt_txt;

                    const cityDatePlus3Days = cityDateTimeplus3Days.slice(0, 10);
                    const cityNamePlus3Days = city.city.name;
                    const cityDesPlus3Days = city.list[24].weather[0].description;
                    const cityTempPlus3Days = city.list[24].main.temp;
                    const cityWindPlus3Days = city.list[24].wind.speed;
                    const cityIconIdPlus3Days = city.list[24].weather[0].icon;

                    const cityIconSrcPlus3Days = ('http://openweathermap.org/img/w/' + cityIconIdPlus1Day + '.png');
                    const cityIconPlus3Days = '<img src="' + cityIconSrcPlus3Days + '">';

                    const cityDate3In = document.querySelector('.city__date-plus3Days');
                    cityDate3In.textContent = cityDatePlus3Days;

                    const cityName3In = document.querySelector('.city__name-plus3Days');
                    cityName3In.textContent = cityNamePlus3Days;

                    const cityWeather3In = document.querySelector('.city__weather-plus3Days');
                    cityWeather3In.textContent = cityDesPlus3Days;

                    const cityTemp3In = document.querySelector('.city__temp-plus3Days');
                    cityTemp3In.textContent = cityTempPlus3Days + ' C';

                    const cityWind3In = document.querySelector('.city__wind-plus3Days');
                    cityWind3In.textContent = 'Wind: ' + cityWindPlus3Days + ' m/s';

                    const cityIcon3In = document.querySelector('.city__icon-plus3Days');
                    cityIcon3In.innerHTML = cityIconPlus3Days;




                    // pluS 4 days
                    const cityDateTimeplus4Days = city.list[32].dt_txt;

                    const cityDatePlus4Days = cityDateTimeplus4Days.slice(0, 10);
                    const cityNamePlus4Days = city.city.name;
                    const cityDesPlus4Days = city.list[32].weather[0].description;
                    const cityTempPlus4Days = city.list[32].main.temp;
                    const cityWindPlus4Days = city.list[32].wind.speed;
                    const cityIconIdPlus4Days = city.list[32].weather[0].icon;

                    const cityIconSrcPlus4Days = ('http://openweathermap.org/img/w/' + cityIconIdPlus1Day + '.png');
                    const cityIconPlus4Days = '<img src="' + cityIconSrc + '">';

                    const cityDate4In = document.querySelector('.city__date-plus4Days');
                    cityDate4In.textContent = cityDatePlus4Days;

                    const cityName4In = document.querySelector('.city__name-plus4Days');
                    cityName4In.textContent = cityNamePlus4Days;

                    const cityWeather4In = document.querySelector('.city__weather-plus4Days');
                    cityWeather4In.textContent = cityDesPlus4Days;

                    const cityTemp4In = document.querySelector('.city__temp-plus4Days');
                    cityTemp4In.textContent = cityTempPlus4Days + ' C';

                    const cityWind4In = document.querySelector('.city__wind-plus4Days');
                    cityWind4In.textContent = 'Wind: ' + cityWindPlus4Days + ' m/s';

                    const cityIcon4In = document.querySelector('.city__icon-plus4Days');
                    cityIcon4In.innerHTML = cityIconPlus4Days;


                    const box = document.querySelectorAll('.weather__box');

                    for (let i = 0; i < box.length; i++) {
                        box[i].style.display = 'block';
                    }

                } else {
                    console.log('Błąd');
                }
            })

        });
});