import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunk from 'redux-thunk'
import { citiesReducer } from './citiesReducer';

const allReducers = combineReducers({
  cities: citiesReducer,
})

export const store = createStore(allReducers, applyMiddleware(thunk));
