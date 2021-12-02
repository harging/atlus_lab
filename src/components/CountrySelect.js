import React from 'react';

const CountrySelector = ({countries, onCountrySelected}) => {

    const handleChange = function(event) {
        const chosenCountry = countries[event.target.value];
        onCountrySelected(chosenCountry);
    }
    
    const CountryOptions = countries.map((country, index) => {
      return <option country={country} key={index}>{country.name.common}</option>
    })

    return (
        <select defaultValue="" onChange={handleChange}>
            <option value="" selected>Choose a Country</option>
            {CountryOptions}
        </select>
    )
}

export default CountrySelector;