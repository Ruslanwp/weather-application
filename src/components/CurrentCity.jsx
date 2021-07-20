import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCityByCoords } from '../api';
import WeatherItem from './WeatherItem';

const CurrentCity = (coords) => {
  const dispatch = useDispatch();
  const cities = useSelector(state => state.cities.cities);

  useEffect(() => {
    dispatch(getCityByCoords(coords))
  }, []);

  return (
    <>
      {cities.length !== 0 && (
        cities.map(city => (
          <WeatherItem
            key={city.id}
            day={city}
            cityName={city.name}
          />
        )))
      }
    </>
  );
};

export default CurrentCity;