import React from 'react';

const Country = ({country, onCountryClick, onFavouriteClick}) => {

    // if (independent == true) {
    //     independent = 'True'
    // }
    // else {
    //     independent = 'False'
    // }

    country.independent = String(country.independent);
    country.unMember = String(country.unMember);
    

    if (!country.borders) {
        return <p>Data is loading...</p>;
      }
    else {

        const handleClick = function(){
            onCountryClick(country);
          }

        const handleFavourite = function(country) {
            onFavouriteClick(country);
        }
  

    return (

        
        <li onClick={handleClick}>
        <h4>{country.name.common}</h4>
        <p>Total Population: {country.population}</p>
        <button onClick={handleFavourite}>Favourite</button>
        </li>
    )
    }
}

export default Country;