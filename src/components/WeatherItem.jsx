import moment from 'moment';
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteCity } from '../redux/citiesReducer';
import './WeatherItem.css';

const WeatherItem = ({day, cityName}) => {
  const dispatch = useDispatch()
  const date = moment.unix(day.dt).format("LLLL")

  const deleteCityHandler = (cityId) => {
    dispatch(deleteCity(cityId))
  };

  return (
    <>
      <div className="card">
        <header className="card-header has-background-primary-dark" 
          style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}
        >
          <p className="card-header-title has-text-white">
            {cityName}
          </p>
          <div className="icon" style={{width: '36px'}}>
            <img style={{alignSelf: 'center'}} src={`https://openweathermap.org/img/w/${day.weather[0].icon}.png`}></img>
          </div>
        </header>
        <div className="card-content has-background-info-light">
          <div className="content">
            <div style={{textAlign: 'center'}}>Feels like {Math.floor(day.main.feels_like * 10) / 10} t°C</div>
            <div className="temperature" style={{display: 'flex', justifyContent: 'space-around', textAlign: 'center'}}>
              <div>
                <p style={{margin: '12px 0 0'}}>Min</p>
                <p>{Math.floor(day.main.temp_min * 10) / 10} t°C</p>  
              </div>
              <div>
                <p style={{margin: '12px 0 0'}}>Max</p>
                <p>{Math.floor(day.main.temp_max * 10) / 10} t°C</p>  
              </div>
            </div>
            <div style={{textAlign: 'center', marginTop: '15px'}}>
              <strong>{date}</strong>
            </div>
          </div>
        </div>
        <footer className="card-footer">
          <a
          onClick={() => deleteCityHandler(day.id)} 
          className="card-footer-item has-background-danger-light has-text-danger-dark"
          >
            Delete
          </a>
        </footer>
      </div>
    </>
  );
};

export default WeatherItem;