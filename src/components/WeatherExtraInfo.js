import React from 'react';

const WeatherExtraInfo = ({humidity,wind}) => (
    <div>
        <span>{`${humidity} % humedad `}</span>
        <br/>
        <span>{`${wind} viento`}</span>
    </div>
);

export default WeatherExtraInfo;