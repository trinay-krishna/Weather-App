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
} from './DOM';

function setupPageElement(place) {
  const responsePromise = initAPI(place);
  const weatherCondition = getWeatherCondition(responsePromise);
  const weatherForecast = getWeatherForecast(responsePromise);
  const responseJSON = getResponseJSON(responsePromise);

  weatherCondition.then(setWeatherConditionDOM);
  weatherForecast.then(setForecastInfoDOM);
  responseJSON.then(setAirInfoDOM);
}

setupPageElement('Hyderabad');
