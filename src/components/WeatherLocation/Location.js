import React from 'react';
import PropTypes from 'prop-types';

const Location = ({city}) => {
  //  console.log(props)
    //debugger;
    //const {city} = props;
    return (
        <div>
            <h3>{city}</h3>
        </div>
    )
};


Location.prototype = {
    city: PropTypes.string.isRequired,
}
export default Location;