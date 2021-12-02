import React from 'react';
import Country from './Country';

const CountriesList = ({countries, loading, onCountryClick, onFavouriteClick}) => {

    const CountryItems = countries.map((country, index) => {
        return <Country 
        country = {country}
        onCountryClick={onCountryClick}
        onFavouriteClick={onFavouriteClick}/>
      })

    return (
        <>
            <h3>Country List</h3>
            <ul>
            {CountryItems}
            </ul>
        </>
    )
}

export default CountriesList;