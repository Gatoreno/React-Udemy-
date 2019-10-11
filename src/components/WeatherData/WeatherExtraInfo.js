import React from 'react';
import PropTpyes from 'prop-types';

const WeatherExtraInfo = ({humidity,wind}) => (
    <div>
        <span>{`${humidity} % humedad `}</span>
        <br/>
        <span>{`${wind} viento`}</span>
    </div>
);

WeatherExtraInfo.prototype = {
    humidity: PropTpyes.string.isRequired,
    wind: PropTpyes.string.isRequired,
}

export default WeatherExtraInfo;