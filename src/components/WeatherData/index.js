import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';
import './styles.css';
import {
    CLOUD,CLOUDY,SUN,RAIN,SNOW,WINDY,
} from './../../constants/weathers'


const WeatherData = () => (
    <div className="weatherDataContent">
        <h3><WeatherTemperature 
            weatherState={RAIN}
            temperature={34} /></h3>
        <WeatherExtraInfo
            humidity={80} wind={"10 m/s"}
        />
    </div>
);

export default WeatherData;