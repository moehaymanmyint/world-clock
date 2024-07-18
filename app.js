setInterval(function(){
    let cityElement = document.querySelector(".city");
    let dateElemnt = document.querySelector(".date");
    let timeElement = document.querySelector(".time");

    let yangonTimezone = moment().tz("Europe/Paris");

    cityElement.innerHTML = "Paris";
    dateElemnt.innerHTML = yangonTimezone.format("MMMM Do, YYYY");
    timeElement.innerHTML = yangonTimezone.format("h:mm:ss A");
}), 1000;