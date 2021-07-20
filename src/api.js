import { fetchCity, setErrorMessage } from "./redux/citiesReducer";

const API_KEY = '055492e51f32a94adbc9b075f73e863d'
const API_URL = 'https://api.openweathermap.org/data/2.5/';

export function getCityByCoords(coords) {
  return async (dispatch) => {
    try {
      const {latitude, longitude} = coords.coords;
      const request = await fetch(`${API_URL}find/?lat=${latitude}&lon=${longitude}&units=metric&cnt=1&appid=${API_KEY}`)
      const response = await request.json();


      console.log(response.list[0]);
      dispatch(fetchCity(response.list[0]))
    } catch (error) {
      throw new Error('error')
    }  
  }
}

export function getCityByName(name) {
  return async (dispatch) => {
    const request = await fetch(`${API_URL}weather?q=${name}&units=metric&appid=${API_KEY}`)
    const response = await request.json();

    if (response.cod === 200) {
      dispatch(fetchCity(response))
    } else {
      dispatch(setErrorMessage('city has not been found'))
    }
  }
}
