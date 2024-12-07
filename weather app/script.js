const user_input1 =document.getElementById("user_input")
const srch_bt = document.getElementById("src_but")
const api_key = "1051ac9b1cd65290911641a014d16434"

srch_bt.addEventListener("click",async ()=>{

    user_input =user_input1.value

    
        const georesponse = await fetch (`https://api.openweathermap.org/geo/1.0/direct?q=${user_input}&limit=5&appid=1051ac9b1cd65290911641a014d16434`)
        const geodata = await georesponse.json();
        // console.log(geodata)
         const latitude = geodata[0].lat;
         const longitude = geodata[0].lon
        //  console.log(latitude)
        //  console.log(longitude)
    ////////////////////////
        const georespons = await fetch (`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${api_key}`)
        const geoweather_data = await georespons.json();
        console.log(geoweather_data)

        console.log(user_input)

        document.querySelector(".city").innerHTML = geoweather_data.name;
        document.querySelector(".humity").innerHTML = geoweather_data.main.humidity+`%`;
       const temprature_k = geoweather_data.main.temp 
 document.querySelector(".temprature").innerHTML = Math.round(temprature_k-273.15)+`°c`

 document.querySelector(".wind").innerHTML = geoweather_data.wind.speed +`km/h`;
 document.querySelector(".weather_status").innerHTML = geoweather_data.weather[0].description;

 

        // console.log(geoweather_data.name)
     
    
     }
    
    
 
    

)








// const user_input = document.querySelector("#user_input"); // Assuming input field has id 'user_input'
// const srch_bt = document.querySelector("#src_but"); // Assuming button has id 'src_but'
// const api_key = "1051ac9b1cd65290911641a014d16434";

// srch_bt.addEventListener("click", async () => {
//     const cityName = user_input.value; // Get user input value
//     if (!cityName) {
//         console.log("Please enter a city name.");
//         return;
//     }

//     try {
//         // Fetch geolocation data
//         const geoResponse = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${api_key}`);
//         const geoData = await geoResponse.json();

//         if (geoData.length === 0) {
//             console.log("City not found.");
//             return;
//         }

//         const latitude = geoData[0].lat;
//         const longitude = geoData[0].lon;

//         console.log("Latitude:", latitude);
//         console.log("Longitude:", longitude);

//         // Fetch weather data
//         const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${api_key}`);
//         const weatherData = await weatherResponse.json();

//         console.log("Weather Data:", weatherData);
//     } catch (error) {
//         console.error("Error fetching data:", error);
//     }
// });




