import React, { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { getCityByCoords } from '../api';
import CurrentCity from './CurrentCity';
import './WeatherList.css'

const WeatherList = () => {
  const [currentLocation, setCurrentLocation] = useState(null);
  const cities = useSelector(state => state.cities.cities);

  console.log(cities);

  const handleWeatherRefresh = () => {
    const res = cities.forEach(element => {
      console.log(element.name);
    })
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
      <button onClick={handleWeatherRefresh}>Refresh weather data</button>
      <div className='weather'>
        {currentLocation && (
          <CurrentCity coords={currentLocation} />
        )}
      </div>
    </>
  );
};

export default WeatherList;