function updateTime(){
    // Yangon
    let yangonCityElement = document.querySelector(".yangon-city");
    let yangonDateElemnt = document.querySelector(".yangon-date");
    let yangonTimeElement = document.querySelector(".yangon-time");

    let yangonTimezone = moment().tz("Asia/Yangon");

    yangonCityElement.innerHTML = "Yangon";
    yangonDateElemnt.innerHTML = yangonTimezone.format("MMMM Do, YYYY");
    yangonTimeElement.innerHTML = yangonTimezone.format("h:mm:ss A");

    // Istanbul
    let singaporeCityElement = document.querySelector(".singapore-city");
    let singaporeDateElemnt = document.querySelector(".singapore-date");
    let singaporeTimeElement = document.querySelector(".singapore-time");

    let singaporeTimezone = moment().tz("Asia/Singapore");

    singaporeCityElement.innerHTML = "Singapore";
    singaporeDateElemnt.innerHTML = singaporeTimezone.format("MMMM Do, YYYY");
    singaporeTimeElement.innerHTML = singaporeTimezone.format("h:mm:ss A");

    // Bangkok
    let bangkokCityElement = document.querySelector(".bangkok-city");
    let bangkokDateElemnt = document.querySelector(".bangkok-date");
    let bangkokTimeElement = document.querySelector(".bangkok-time");

    let bangkokTimezone = moment().tz("Asia/Bangkok");

    bangkokCityElement.innerHTML = "Bangkok";
    bangkokDateElemnt.innerHTML = bangkokTimezone.format("MMMM Do, YYYY");
    bangkokTimeElement.innerHTML = bangkokTimezone.format("h:mm:ss A");
}

console.log(moment.tz.names());
function updateCity(event){ 
    let timezone, cityName;
    // Current Time Zone
    if(event.target.value === "current"){
        let currentTimezone = moment.tz.guess();
        timezone = moment().tz(currentTimezone);
        cityName =  currentTimezone.replace("_", " ").split("/")[1];
    } else {
        timezone = moment().tz(event.target.value);
        cityName = event.target.options[event.target.selectedIndex].text;    
    }
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
setInterval(updateTime, 1000);

// All Cities
function reload(){
    location.reload();
}

let allCities = document.querySelector("#all-cities");
allCities.addEventListener("click", reload);

// Dark Mode
function changeTheme(){
    let body = document.querySelector(".light");
    if(body.classList.contains("dark")){
        body.classList.remove("dark");
        icon.innerHTML = `<i class="fa-solid fa-moon fs-5" id="dark-mode"></i>`;
    } else{
        body.classList.add("dark");
        icon.innerHTML = `<i class="fa-solid fa-sun fs-5" id="dark-mode"></i>`;
    }    
}

let icon = document.querySelector("#dark-mode");
icon.innerHTML = `<i class="fa-solid fa-moon fs-5" id="dark-mode"></i>`;
icon.addEventListener("click", changeTheme);

