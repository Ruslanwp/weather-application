import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCityByCoords, getCityByName, refreshCitiesData } from '../api';
import CurrentCity from './CurrentCity';
import './WeatherList.css'
import { FaSync } from "react-icons/fa";

const WeatherList = () => {
  const [currentLocation, setCurrentLocation] = useState(null);
  const cities = useSelector(state => state.cities.cities);
  const dispatch = useDispatch()

  const handleWeatherRefresh = () => {
    const words = cities.map(city => city.name)

    dispatch(refreshCitiesData(words));
  }

  function success(pos) {
    const crd = pos.coords;
  
    const coords = {
      latitude: crd.latitude,
      longitude: crd.longitude,
    }
  
    setCurrentLocation(coords)
  };
  
  function error(err) {
    return {
      code: err.code,
      message: err.message
    };
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success, error);
  }, []);

  return (
    <>
      <div style={{textAlign: 'center', margin: '15px 0'}}>
        <p>Refresh weather data</p>
        <FaSync size='40px' onClick={handleWeatherRefresh}/>
      </div>
      <div className='weather'>
        {currentLocation && (
          <CurrentCity coords={currentLocation} />
        )}
      </div>
    </>
  );
};

export default WeatherList;