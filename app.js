// Yangon
let yangonCityElement = document.querySelector(".yangon-city");
let yangonDateElemnt = document.querySelector(".yangon-date");
let yangonTimeElement = document.querySelector(".yangon-time");

let yangonTimezone = moment().tz("Asia/Yangon");

yangonCityElement.innerHTML = "Yangon";
yangonDateElemnt.innerHTML = yangonTimezone.format("MMMM Do, YYYY");
yangonTimeElement.innerHTML = yangonTimezone.format("h:mm:ss A");

// Bangkok
let bangkokCityElement = document.querySelector(".bangkok-city");
let bangkokDateElemnt = document.querySelector(".bangkok-date");
let bangkokTimeElement = document.querySelector(".bangkok-time");

let bangkokTimezone = moment().tz("Asia/Bangkok");

bangkokCityElement.innerHTML = "Bangkok";
bangkokDateElemnt.innerHTML = bangkokTimezone.format("MMMM Do, YYYY");
bangkokTimeElement.innerHTML = bangkokTimezone.format("h:mm:ss A");

function updateCity(event){
    let cityName = event.target.options[event.target.selectedIndex].text;
    let timezone = moment().tz(event.target.value);
    let cityDisplayElement = document.querySelector(".city-display");
    cityDisplayElement.innerHTML = `
    <div class="city-diaply">
        <div class="city-info">
            <div class="details">
                    <h1 class="city">${cityName}</h1>
                    <p class="date">${timezone.format("MMMM Do, YYYY")}</p>
                </div>
            <div id="time" class="time">${timezone.format("h:mm:ss A")}</div>
        </div>
    </div>    
    `;    
}

let cityList = document.querySelector(".city-list");
cityList.addEventListener("change", updateCity);

