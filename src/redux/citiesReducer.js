const initialState = {
  cities: JSON.parse(localStorage.getItem('cities')) || [],
  errorMessage: '',
  successMessage: ''
}

const FETCH_CITY = 'FETCH_CITY';
const DELETE_CITY= 'DELETE_CITY';
const SET_ERROR_MESSAGE = 'SET_ERROR_MESSAGE';
const SUCCESS_MESSAGE = 'SUCCESS_MESSAGE';

export const citiesReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_CITY:
      const existedCity = state.cities.find(city => city.id === action.payload.id);

      if (!existedCity) {

        localStorage.setItem('cities', JSON.stringify([...state.cities, action.payload]))
        return {
          ...state,
          cities: [...state.cities, action.payload]
        }
      }

      return state;
    
    case DELETE_CITY:
      const filteredCities = state.cities.filter(city => city.id !== action.payload)
      localStorage.setItem('cities', JSON.stringify(filteredCities))

      return {
        ...state,
        cities: filteredCities
      }

    case SET_ERROR_MESSAGE:
      return {
        ...state,
        errorMessage: action.payload,
      }

    default:
      return state;
  }
}

export const fetchCity = (data) => ({type: FETCH_CITY, payload: data});
export const deleteCity = (cityId) => ({type: DELETE_CITY, payload: cityId});
export const setErrorMessage = (message) => ({type: SET_ERROR_MESSAGE, payload: message});
