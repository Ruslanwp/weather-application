import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { setDay } from '../store/reducers/weatherReducer';
import Logo from './weatherLogo.png';
import './Navigation.css';
import { useState } from 'react';
import { getCityByName } from '../api';
import { setErrorMessage } from '../redux/citiesReducer';
import MessageComponent from './MessageComponent';

const Navigation = () => {
  const [cityName, setCityName] = useState('');
  const dispatch = useDispatch();

  const errorMessage = useSelector(state => state.cities.errorMessage);

  const handleCityChange = (event) => {
    setCityName(event.target.value);
    dispatch(setErrorMessage(''));
  }

  const handleCityFind = () => {
    dispatch(getCityByName(cityName));
    setCityName('')
  }

  // const dispatch = useDispatch();
  // const dateRange = useTypedSelector(state => state.weather.weatherRange);

  // const onSelectHandler = (event) => {
  //   dispatch(setDay(event.target.value))
  // }

  return (
    <header className="has-background-link-light">
      <nav className="navigation" style={{background: 'primary'}}>
        <a>
          <img style={{width: '60px'}} src={Logo}></img>
        </a>
        <div>
          <label htmlFor="daySelector">Enter city name</label>
          <input style={{margin: '0 10px'}} id="daySelector" value={cityName} onChange={handleCityChange}/>
          <button onClick={handleCityFind}>добавить</button>
          <p className="has-text-danger-dark">{errorMessage}</p>
        </div>
      </nav>
      <MessageComponent />
    </header>
  );
};

export default Navigation;
