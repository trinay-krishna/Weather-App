import './styles.css';
import { initAPI, getWeatherCondition } from './WeatherAPI';

const responsePromise = initAPI('Hyderabad');
getWeatherCondition(responsePromise);
