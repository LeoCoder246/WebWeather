const apiKey ='f7484747d4122f05e588aed6310b5e55'; //'f7484747d4122f05e588aed6310b5e55';
const city = 'Detroit';
const url = `https://api.weatherstack.com/current?access_key=${apiKey}&query=${city}`;
 
fetch(url).then(response => response.json()).then(data =>{ 
  
  const temperature = data.current.temperature;
  const weatherDescription = data.current.weather_descriptions[0];
  const windspeed = data.current.wind_speed;
  const pressure = data.current.pressure;
  const precipitation = data.current.precip;
  const humidity = data.current.humidity;
  const feelslike = data.current.feelslike;
  const visibility = data.current.visibility;
  const windDirection = data.current.wind_degree;
  
     const windDirectionText =getWindDirection(windDirection);

  const cityname = data.location.name;
  const country = data.location.country;
      
  
    const localtime = data.location.localtime;
    const dateTime = new Date(localtime);  

       const year =  dateTime.getFullYear();
       const month = dateTime.getMonth() + 1;
       const day =dateTime.getDate();

       const formattedDate = `${day < 10? '0' + day: day}-${month < 10? '0' + month: month}-${year}`;

        const time =dateTime.toLocaleString('en-US',{
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true
        });


        let  weatherHTML = `
         <div class="back-video1">
      <video autoplay loop muted plays-inline class="back-video">
        <source src="images/cloudvideo.mp4" type="video/mp4">
      </video>
         <div class="top-head">
        <div class=".left-section"><img class="web-logo" src="images/wolf.PNG" width="70px" >
          <img class="web-name-logo" src="images/wolf1.png ">
        </div>
        <h1 style=" display: inline-block; margin-right: 30px; margin-top: 10px;">
          ${cityname} <img src="images/place.png" width="20px">
        </h1>
        <div class="top-head-right">
          <div>${formattedDate}</div>
          <div>${time}</div>
        </div>
      </div>
      
      <div style="margin-left: 15px; font-family: roboto,Arial, Helvetica, sans-serif;font-size: 20px;">${country}</div>
      <div class="degree-dispaly">
        ${temperature}&degC <span style=" 
      display: block;font-size: 22px;padding-top: 20px;">Feels like ${feelslike}&deg;C </span></div>
           <p style="text-align: center; margin:0px;font-size: 22px;
           font-family: roboto,Arial, Helvetica, sans-serif;">${weatherDescription}</p>

           <div class="flex-container">
             
            <div class="grid-main-div">
              <div class="grid-container">
                <div class="grid-container-hearder">wind Speed</div>
                <div class="weather-info-grid" > 
                  <div class="weather-info-deatils">${windspeed}km</div>
                  <div><img style="border-radius: 40%; mix-blend-mode: multiply;" src="images/windlogo1.jpg" width="100px" height="90px"></div>
                </div>
              </div>

              <div class="grid-container">
                <div class="grid-container-hearder">Pressure</div>
                <div class="weather-info-grid" > 
                  <div class="weather-info-deatils">${pressure}mb</div>
                  <div><img style="border-radius: 40%; mix-blend-mode: multiply; margin-right: 15px;" src="images/pressurelogo.png" width="100px" height="90px"></div>
                </div>
              </div>

              <div class="grid-container">
                <div class="grid-container-hearder">Precipitation</div>
                <div class="weather-info-grid" > 
                  <div class="weather-info-deatils">${precipitation}mm</div>
                  <div><img style="border-radius: 40%; mix-blend-mode: multiply;" src="images/precipitationlogo.jpg" width="100px" height="90px"></div>
                </div>
              </div>

              <div class="grid-container">
                <div class="grid-container-hearder">Visibility</div>
                <div class="weather-info-grid" > 
                  <div class="weather-info-deatils" style="padding-top: 20px;">${visibility}km</div>
                  <div ><img style=" margin-left: 10px; border-radius: 40%; mix-blend-mode: multiply;" src="images/visibilitylogo.png" width="80px" height="70px"></div>
                </div>
              </div>

              <div class="grid-container">
                <div class="grid-container-hearder">Humididty</div>
                <div class="weather-info-grid" > 
                  <div class="weather-info-deatils">${humidity}%</div>
                  <div><img style="border-radius: 40%; mix-blend-mode: multiply;" src="images/humiditylogo.jpg" width="100px" height="90px"></div>
                </div>
              </div>

              <div class="grid-container">
                <div class="grid-container-hearder">wind Direction</div>
                <div class="weather-info-grid" > 
                  <div class="weather-info-deatils">${windDirectionText}</div>
                  <div><img style="border-radius: 40%; mix-blend-mode: multiply;" src="images/compasslogo.jpg" width="110px" height="100px"></div>
                </div>
              </div>
             
            </div>
           </div> 
           </div>
        
        `;
        document.querySelector('.main-div').innerHTML = weatherHTML;

});
function getWindDirection(degrees){
  if(degrees >= 0 && degrees < 45){
    return 'N';
  }else if(degrees >=45 && degrees < 90){
    return 'N-E';
  }else if(degrees >= 90 && degrees < 135){
    return 'E';
  }else if(degrees >= 135 && degrees < 180){
    return 'SE';
  }else if(degrees >= 180 && degrees < 225){
    return 'S';
  }else if(degrees >= 225 && degrees < 270){
    return 'SW';
  }else if(degrees >= 270 && degrees < 315){
    return 'W';
  }else if(degrees >= 315 && degrees < 360){
    return 'NW';
  };
}

/*
const apiKey = 'f7484747d4122f05e588aed6310b5e55';// Replace with your Weatherstack API key
const city = 'Mumbai';
const url = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${city}`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data); // Log the entire response object
  })
  .catch(error => console.log('Error:', error));
  */