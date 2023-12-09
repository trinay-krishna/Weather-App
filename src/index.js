import './styles.css';
import {
  initAPI,
  getWeatherCondition,
  getResponseJSON,
  getWeatherForecast,
} from './WeatherAPI';
import {
  setWeatherConditionDOM,
  setAirInfoDOM,
  setForecastInfoDOM,
  getCityInputDOM,
  markInvalidInputDOM,
} from './DOM';

function setupPageElement(place) {
  const responsePromise = initAPI(place).catch(markInvalidInputDOM);
  const weatherCondition = getWeatherCondition(responsePromise);
  const weatherForecast = getWeatherForecast(responsePromise);
  const responseJSON = getResponseJSON(responsePromise);

  weatherCondition.then(setWeatherConditionDOM);
  weatherForecast.then(setForecastInfoDOM);
  responseJSON.then(setAirInfoDOM);
}

const citySearchBtn = document.querySelector('.search-btn');

citySearchBtn.addEventListener('click', () => {
  const city = getCityInputDOM();
  setupPageElement(city);
});

setupPageElement('Hyderabad');
