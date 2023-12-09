const startTime = 3;
const endTime = 21;
let cityInput;

function setWeatherConditionDOM(response) {
  const mainTemp = document.querySelector('.temp h1');
  const mainCond = document.querySelector('.temp h2');

  mainTemp.textContent = `${response.temp_c}° C`;
  mainCond.textContent = `${response.condition.text}`;
}

function setAirInfoDOM(response) {
  const airInfo = document.querySelectorAll('.air-info > p');

  const { humidity } = response.current;
  const windSpeed = response.current.wind_kph;
  const rainPercentage =
    response.forecast.forecastday[0].day.daily_chance_of_rain;
  const UVIndex = response.current.uv;
  airInfo[0].textContent = `Humidity: ${humidity}%`;
  airInfo[1].textContent = `Wind Speed: ${windSpeed} KMPH`;
  airInfo[2].textContent = `Rain Percentage: ${rainPercentage} %`;
  airInfo[3].textContent = `UV: ${UVIndex}`;
}

function getImageSrc(src) {
  const srcArray = src.split('/');
  return srcArray[srcArray.length - 1];
}

function setForecastImages(forecastList) {
  const images = document.querySelectorAll('.cond-img');
  let imageIndex = 0;
  for (let i = startTime; i <= endTime; i += 3) {
    const hour = forecastList[i];
    const imageSrc = getImageSrc(hour.condition.icon);
    const time = hour.is_day ? 'day' : 'night';
    const imageSource = `../src/weatherIcons/${time}/${imageSrc}`;

    try {
      images[imageIndex].setAttribute('src', imageSource);
    } catch (err) {
      console.log(err);
    }

    imageIndex += 1;
  }
}

function setForecastText(forecastList) {
  const texts = document.querySelectorAll('.cond-text');
  let textIndex = 0;
  for (let i = startTime; i <= endTime; i += 3) {
    const hour = forecastList[i];
    const conditionText = hour.condition.text;

    try {
      texts[textIndex].textContent = conditionText;
    } catch (err) {
      console.log(err);
    }

    textIndex += 1;
  }
}

function setForecastTemp(forecastList) {
  const temps = document.querySelectorAll('.cond-temp');
  let tempIndex = 0;
  for (let i = startTime; i <= endTime; i += 3) {
    const hour = forecastList[i];
    const tempText = `${hour.temp_c}°C`;

    try {
      temps[tempIndex].textContent = tempText;
    } catch (err) {
      console.log(err);
    }

    tempIndex += 1;
  }
}

function setForecastInfoDOM(response) {
  setForecastImages(response.forecastday[0].hour);
  setForecastText(response.forecastday[0].hour);
  setForecastTemp(response.forecastday[0].hour);
}

function getCityInputDOM() {
  if (!cityInput) {
    cityInput = document.querySelector('input');
  }
  cityInput.style.border = '1px solid black';
  const city = cityInput.value;
  cityInput.value = '';
  return city;
}

function markInvalidInputDOM() {
  if (!cityInput) {
    cityInput = document.querySelector('input');
  }

  cityInput.style.border = '1px solid red';
}

export {
  setWeatherConditionDOM,
  setAirInfoDOM,
  setForecastInfoDOM,
  getCityInputDOM,
  markInvalidInputDOM,
};
