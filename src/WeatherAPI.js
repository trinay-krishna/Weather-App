const API_KEY = '435e04db29c445c59c5140315230710';
let responseJSON;

async function initAPI(location) {
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${location}&aqi=yes`,
      { mode: 'cors' }
    );
    if (response.status !== 200) {
      throw new Error('Bad Request');
    }
    responseJSON = await response.json();
    console.log(responseJSON);
    return responseJSON;
  } catch (err) {
    console.log(`ERROR ${err}`);
  }
}

async function getWeatherCondition(responsePromise) {
  await responsePromise;
  console.log(responseJSON);
}

export { initAPI, getWeatherCondition };
